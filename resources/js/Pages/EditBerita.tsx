import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditBerita(props: PageProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('id', String(props.myBerita.id));
        formData.append('title', title || props.myBerita.title);
        formData.append('description', description || props.myBerita.description);
        formData.append('category', category || props.myBerita.category);
        
        if (image) {
            formData.append('image', image);
        }
    
        Inertia.post('/artikel/update', formData, {
            forceFormData: true,
            onSuccess: () => {
                Inertia.visit('/dashboard', {
                    onSuccess: (page) => {
                        page.props.flash = {
                            message: 'Berita berhasil diupdate!'
                        };
                    }
                });
            }
        });
    };

    const handleBack = () => {
        Inertia.visit('/dashboard');
    };
    
    return (
        <div className="min-h-screen bg-slate-100">
            <Head title="EditBerita"/>

            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full lg:w-1/3">
                    <div className="card w-full bg-base-100 shadow-xl">
                    <div className="text-2xl text-center mt-10">Edit Berita</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <label className="block font-medium">Judul</label>
                                <input 
                                    type="text" 
                                    placeholder="Judul" 
                                    className="mt-2 m-2 input input-bordered input-secondary w-full bg-white" 
                                    onChange={(title) => setTitle(title.target.value)}  
                                    defaultValue={props.myBerita.title}
                                />
                                <label className="block font-medium">Deskripsi</label>
                                <input 
                                    type="text" 
                                    placeholder="Deskripsi" 
                                    className="m-2 input input-bordered input-secondary w-full bg-white" 
                                    onChange={(description) => setDescription(description.target.value)} 
                                    defaultValue={props.myBerita.description}
                                />
                                <label className="block font-medium">Kategori</label>
                                <input 
                                    type="text" 
                                    placeholder="Kategori" 
                                    className="m-2 input input-bordered input-secondary w-full bg-white" 
                                    onChange={(category) => setCategory(category.target.value)}  
                                    defaultValue={props.myBerita.category}
                                />

                                <input 
                                    type="file" 
                                    onChange={(e: any) => setImage(e.target.files[0])} 
                                    className="m-2 file-input file-input-bordered file-input-secondary w-full max-w-xs bg-white" 
                                />

                                <div className="flex justify-end gap-x-2 mt-4">
                                    <button type="button" className="btn btn-secondary" onClick={handleBack}>Kembali</button>
                                    <button className='btn btn-primary' type="submit">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}