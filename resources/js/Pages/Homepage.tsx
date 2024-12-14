import { Head } from "@inertiajs/react";
import React from "react";
import Navbar from "@/Components/Navbar";
import BeritaList from "@/Components/Homepage/BeritaList";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Footer";

interface ArtikelData {
    id: number;
    title: string;
    description: string;
    category: string;
    author: string;
    image?: string;
    created_at: string;
}

interface ArtikelMeta {
    current_page: number;
    last_page: number;
    total: number;
    per_page: number;
}

interface Artikel {
    data: ArtikelData[];
    meta: ArtikelMeta;
}

interface HomepageProps {
    title: string;
    artikel: Artikel;
    auth?: {
        user: {
            id: number;
            name: string;
            email: string;
            email_verified_at: string | null;
            password: string;
            remember_token: string | null;
            created_at: Date;
            updated_at: Date;
        };
    };
}

export default function Homepage({ title, artikel, auth }: HomepageProps) {
    return (
        <div className="min-h-screen bg-slate-100">
            <Head title={title} />
            <Navbar user={auth ? auth.user : null} />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-center items-center gap-4 p-6 mt-10">
                <BeritaList artikel={artikel.data} />
            </div>
            <div className="flex justify-center items-center my-10">
                <Paginator meta={artikel.meta} />
            </div>
            <Footer />
        </div>
    );
}
