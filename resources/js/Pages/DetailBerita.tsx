import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { User } from '@/types';

interface DetailBeritaProps {
    artikel: {
        title: string;
        category: string;
        author: string;
        image?: string;
        created_at: string;
        description: string;
    };
    auth?: {
        user?: User;
    };
}

export default function DetailBerita({ artikel, auth }: DetailBeritaProps) {
    return (
        <div className="min-h-screen bg-slate-100">
            <Head title={artikel.title} />
            <Navbar user={auth?.user || null} />
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-2 text-slate-900">{artikel.title}</h1>
                    <div className="mb-6">
                        <span className="badge badge-primary mr-2">{artikel.category}</span>
                        <span className="badge badge-secondary">{artikel.author}</span>
                    </div>
                        <div className='mb-5'>
                            {artikel.image && <img src={`/storage/${artikel.image}`} alt={artikel.title} className="w-96" />}
                            <p className="mt-2 text-gray-500">Diposting pada: {new Date(artikel.created_at).toLocaleDateString()}</p>
                        </div>
                    <p className="text-gray-600">{artikel.description}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
