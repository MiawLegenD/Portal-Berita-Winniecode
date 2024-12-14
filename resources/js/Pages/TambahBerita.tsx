import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function TambahBerita(props: PageProps){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false);
    const [notifType, setNotifType] = useState('');

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        category: '',
        image: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        setErrors({
            title: '',
            description: '',
            category: '',
            image: ''
        });
    
        let hasError = false;
    
        if (title === '') {
            setErrors(prevErrors => ({ ...prevErrors, title: 'Kolom judul wajib diisi.' }));
            hasError = true;
        }
        if (description === '') {
            setErrors(prevErrors => ({ ...prevErrors, description: 'Kolom deskripsi wajib diisi.' }));
            hasError = true;
        }
        if (category === '') {
            setErrors(prevErrors => ({ ...prevErrors, category: 'Kolom kategori wajib diisi.' }));
            hasError = true;
        }
        if (!image) {
            setErrors(prevErrors => ({ ...prevErrors, image: 'Anda harus mengupload gambar.' }));
            hasError = true;
        }
    
        if (hasError) {
            setNotifType('error');
            return;
        }
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        if (image) {
            formData.append('image', image);
        }
    
        Inertia.post('/artikel', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    
        setTitle('');
        setDescription('');
        setCategory('');
        setImage(null);
        setNotifType('success');
    };

    const handleBack = () => {
        Inertia.visit('/dashboard');
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <Head title="TambahBerita"/>

            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full lg:w-1/3">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <h1 className="text-2xl text-center mt-10">Tambah Berita</h1>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block font-medium">Judul</label>
                                    {errors.title && ( <p className="text-red-500">{errors.title}</p> )}
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="mt-1 m-2 input input-bordered input-secondary w-full bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Deskripsi</label>
                                    {errors.description && ( <p className="text-red-500">{errors.description}</p> )}
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="mt-1 m-2 input input-bordered input-secondary w-full bg-white"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block font-medium">Kategori</label>
                                    {errors.category && ( <p className="text-red-500">{errors.category}</p> )}
                                    <input
                                        type="text"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="mt-1 m-2 input input-bordered input-secondary w-full bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Upload Gambar</label>
                                    {errors.image && ( <p className="text-red-500">{errors.image}</p> )}
                                    <input
                                        type="file"
                                        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                                        className="m-2 file-input file-input-bordered file-input-secondary w-full max-w-xs bg-white"
                                    />
                                </div>
                                <div className="flex justify-end gap-x-2 mt-4">
                                    <button type="button" onClick={handleBack} className="btn btn-primary rounded">
                                        Kembali
                                    </button>
                                    <button type="submit" className="btn btn-secondary rounded">
                                        Simpan
                                    </button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
};