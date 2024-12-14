import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // Jika pakai routing
import Homepage from '../Homepage';

const user = {
    id: 1,
    name: 'Admin',
    email: 'admim@gmail.com',
    email_verified_at: null,
    password: 'admin123',
    remember_token: null,
    created_at: new Date(),
    updated_at: new Date(),
};

const artikel = {
    data: [
        {
            id: 1,
            title: 'Berita 1',
            description: 'Deskripsi Berita 1',
            category: 'Olahraga',
            author: 'Penulis 1',
            created_at: '2024-10-19T12:00:00Z',
        },
        {
            id: 2,
            title: 'Berita 2',
            description: 'Deskripsi Berita 2',
            category: 'Politik',
            author: 'Penulis 2',
            created_at: '2024-10-19T12:00:00Z',
        },
    ],
    meta: {
        current_page: 1,
        last_page: 1,
        total: 2,
        per_page: 10,
    },
};

describe('Homepage', () => {
    test('Menampilkan list berita', () => {
        render(<Homepage auth={{ user: user }} title="Judul" artikel={artikel} />, { wrapper: MemoryRouter });
        
        // Pastikan berita ditampilkan
        expect(screen.getByText('Berita 1')).toBeInTheDocument();
        expect(screen.getByText('Berita 2')).toBeInTheDocument();
    });

    test('Mengarahkan ke halaman detail berita saat klik "selengkapnya"', () => {
        render(<Homepage auth={{ user: user }} title="Judul" artikel={artikel} />, { wrapper: MemoryRouter });

        // Pastikan ada elemen yang memicu navigasi
        const selengkapnyaButton = screen.getByText('Selengkapnya'); // Pastikan elemen ini ada
        fireEvent.click(selengkapnyaButton); // Klik button "selengkapnya"
        
        // Pastikan user diarahkan ke halaman detail
        expect(screen.getByText('Detail Berita')).toBeInTheDocument();
    });
});
