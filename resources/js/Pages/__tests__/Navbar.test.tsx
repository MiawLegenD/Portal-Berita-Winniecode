import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '@/Components/Navbar';

const user = {
    id: 1,
    name: 'Admin',
    email: 'admin@example.com',
    email_verified_at: null,
    password: 'admin',
    remember_token: null,
    created_at: new Date(),
    updated_at: new Date(),
};

describe('Navbar', () => {
    test('Menampilkan sub-menu saat user sudah login', () => {
        render(<Navbar user={user} />);
        
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
    });

    test('Menampilkan sub-menu login dan registrasi saat user belum login', () => {
        render(<Navbar user={null} />);
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByText('Registrasi')).toBeInTheDocument();
    });
    
});