import { Link, Head, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { User } from "@/types";

interface Artikel {
    id: number;
    title: string;
    description: string;
    category: string;
    image?: string;
    created_at: string;
}

interface DashboardProps {
    auth?: {
        user: User;
    };
    error?: Record<string, string>;
    myBerita?: Artikel[];
    flash?: {
        message: string;
    };
}

export default function Dashboard({ auth, error, myBerita, flash, }: DashboardProps) {
    const [isNotif, setIsNotif] = useState(false);
    const [notifType, setNotifType] = useState("");

    const [errors, setErrors] = useState({
        title: "",
        description: "",
        category: "",
        image: "",
    });

    useEffect(() => {
        if (!auth?.user) {
            Inertia.get("/login");
        }
    }, [auth]);

    if (!auth?.user) {
        return null;
    }

    useEffect(() => {
        if (flash?.message) {
            setNotifType("success");
            setIsNotif(true);
        }

        const timer = setTimeout(() => {
            setIsNotif(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, [flash]);

    return (
        <Authenticated
            user={auth?.user || null}
            errors={error}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <Link href={route("tambah.berita")} as="button" className="ml-20 mt-10 bg-blue-600 text-white px-4 py-2 rounded">
                Tambah Berita
            </Link>

            <div className="py-4 px-20">
                <div className="overflow-x-auto bg-slate-400 p-4">
                    {myBerita && myBerita.length > 0 ? (
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border text-slate-900">No</th>
                                    <th className="py-2 px-4 border text-slate-900">Judul</th>
                                    <th className="py-2 px-4 border text-slate-900">Deskripsi</th>
                                    <th className="py-2 px-4 border text-slate-900">Kategori</th>
                                    <th className="py-2 px-4 border text-slate-900">Gambar</th>
                                    <th className="py-2 px-4 border text-slate-900">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myBerita.map((artikel: Artikel, index: number) => (
                                    <tr key={artikel.id}>
                                        <td className="py-2 px-4 border text-slate-900">{index + 1}</td>
                                        <td className="py-2 px-4 border text-slate-900">{artikel.title}</td>
                                        <td className="py-2 px-4 border text-slate-900">{artikel.description}</td>
                                        <td className="py-2 px-4 border text-slate-900">{artikel.category}</td>
                                        <td className="py-2 px-4 border">
                                            {artikel.image && (
                                                <img
                                                    src={`/storage/${artikel.image}`}
                                                    alt={artikel.title}
                                                    className="w-20 h-20 object-cover"
                                                />
                                            )}
                                        </td>
                                        <td className="px-4 py-2 border text-center">
                                            <div className="flex justify-center space-x-2">
                                                <Link
                                                    href={route("edit.berita")}
                                                    method="get"
                                                    data={{ id: artikel.id }}
                                                    as="button"
                                                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route("delete.berita")}
                                                    method="post"
                                                    data={{ id: artikel.id }}
                                                    as="button"
                                                    className="bg-red-600 text-white px-2 py-1 rounded"
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Saat ini kita belum punya berita</p>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}