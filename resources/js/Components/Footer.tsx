import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            {/* Layout utama dibagi menjadi 2 bagian: kiri (logo) dan kanan (menu) */}
            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
                {/* Banner logo */}
                <div className="ml-28 w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start">
                    <img src="/storage/images/banner-logo.png" alt="Logo Perusahaan" className="h-24 w-auto" />
                </div>

                {/* Bagian menu Kategori dan Navigasi */}
                <div className="ml-28 w-full lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left">
                    {/* Kategori Berita */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Kategori Berita</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-400">Sepak Bola</a></li>
                            <li><a href="#" className="hover:text-gray-400">Kesehatan</a></li>
                            <li><a href="#" className="hover:text-gray-400">Politik</a></li>
                            <li><a href="#" className="hover:text-gray-400">Teknologi</a></li>
                            <li><a href="#" className="hover:text-gray-400">Ekonomi</a></li>
                        </ul>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Navigasi</h3>
                        <ul>
                            <li><a href="/login" className="hover:text-gray-400">Login</a></li>
                            <li><a href="/kontak-kami" className="hover:text-gray-400">Kontak Kami</a></li>
                            <li><a href="/tentang" className="hover:text-gray-400">Tentang</a></li>
                            <li><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Garis pemisah */}
            <div className="border-t border-gray-700 my-6"></div>

            {/* Bagian copyright */}
            <div className="text-center text-gray-400">
                <p>&copy; 2024 Portal Berita WinniCode.</p>
            </div>
        </footer>
    );
};

export default Footer;