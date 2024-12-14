import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailBerita from '../DetailBerita';

describe('DetailBerita', () => {
    test('Menampilkan detail berita yang dipilih', () => {
        const artikel = {
            title: 'Salam Olahraga',
            description: 'Ini deskripsi berita terbaru',
            category: 'Olahraga',
            author: 'Admin',
            created_at: new Date().toISOString(),
        };
        
        const auth = {
            user: {
                id: 1,
                name: 'Admin',
                email: 'admin@gmail.com',
                email_verified_at: null,
                password: 'admin123',
                remember_token: null,
                created_at: new Date(),
                updated_at: new Date(),
            },
        };
        
        render(<DetailBerita artikel={artikel} auth={auth} />);
        
        expect(screen.getByText('Salam Olahraga')).toBeInTheDocument();
        expect(screen.getByText('Ini deskripsi berita terbaru')).toBeInTheDocument();
        expect(screen.getByText('Olahraga')).toBeInTheDocument();
    });
});
