import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
    test('Menampilkan form tambah berita dan list berita', () => {
        render(<Dashboard />);
        
        // Cek apakah form untuk input berita ada
        expect(screen.getByLabelText('Judul')).toBeInTheDocument();
        expect(screen.getByLabelText('Deskripsi')).toBeInTheDocument();
        expect(screen.getByLabelText('Kategori')).toBeInTheDocument();
        expect(screen.getByLabelText('Foto')).toBeInTheDocument();
        
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
        
        // Cek apakah list berita ditampilkan
        expect(screen.getByText('Daftar Berita')).toBeInTheDocument(); // Misal ada header 'Daftar Berita'
    });

    test('Menambah berita baru melalui form', () => {
        render(<Dashboard />);
        
        fireEvent.change(screen.getByLabelText('Judul'), { target: { value: 'Berita Baru' } });
        fireEvent.change(screen.getByLabelText('Deskripsi'), { target: { value: 'Deskripsi Berita' } });
        fireEvent.change(screen.getByLabelText('Kategori'), { target: { value: 'Olahraga' } });
        
        // Jika form menggunakan input file, perlu buat simulasi file
        const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
        const inputFile = screen.getByLabelText('Foto');
        fireEvent.change(inputFile, { target: { files: [file] } });

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
        
        // Kamu bisa cek apakah list berita di-update dengan berita baru
        expect(screen.getByText('Berita Baru')).toBeInTheDocument();
    });
});
