<?php

namespace App\Http\Controllers;

use App\Http\Resources\BeritaCollection;
use App\Models\Berita;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $artikel = new BeritaCollection(Berita::OrderByDesc('id')->paginate(8));
        return Inertia::render('Homepage', [
            'title' => "Portal Berita",
            'description' => "Selamat Datang Di Portal Berita Kami",
            'artikel' => $artikel,
            'user' => auth()->user(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
            'image' => 'image|mimes:jpg,png,jpeg|max:2048', // Validasi gambar
        ]);
    
        // Proses penyimpanan gambar
        $path = $request->file('image')->store('images', 'public'); // Simpan di 'storage/app/public/images'
    
        // Simpan berita dengan path gambar yang benar
        Berita::create([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'author' => auth()->user()->email,
            'image' => $path, // Simpan path lengkap
        ]);
    
        return redirect()->route('dashboard')->with('success', 'Berita berhasil ditambahkan!');
    }


    /**
     * Display the specified resource.
     */
    public function show(Berita $berita)
    {   
        $myBerita = $berita::where('author', auth()->user()->email)->get();
        return Inertia::render('Dashboard', [
            'myBerita' => $myBerita,
            'user' => auth()->user(),
            'errors' => session('errors'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Berita $berita, Request $request)
    {
        return Inertia::render('EditBerita', [
            'myBerita' => $berita->find($request->id),
            'imageUrl' => $berita->image ? Storage::url($berita->image) : null,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        // Validasi input
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validasi gambar
        ]);
    
        // Temukan berita yang ingin diupdate
        $berita = Berita::findOrFail($request->id);
    
        if ($request->hasFile('image')) {
            // Menghapus gambar lama jika diperlukan
            if ($berita->image) {
                Storage::disk('public')->delete($berita->image);
            }
        
            // Menyimpan gambar baru
            $imagePath = $request->file('image')->store('images', 'public');
            $berita->image = $imagePath;
        }
        
        // Tetap simpan kolom image jika tidak ada gambar baru
        $berita->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'image' => $berita->image, // Tetap simpan gambar lama
        ]);        
    
        return redirect()->route('dashboard')->with('message', 'Berita berhasil diupdate');
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $berita = Berita::find($request->id);
        $berita->delete();
        return redirect()->back()->with('massage', 'Berita berhasil dihapus');
    }

    public function detail($id)
    {
        $artikel = Berita::findOrFail($id); // Ambil data berita berdasarkan id
        return Inertia::render('DetailBerita', [
            'artikel' => $artikel,
            'auth' => auth()->check() ? auth()->user() : null,
        ]);
    }

}
