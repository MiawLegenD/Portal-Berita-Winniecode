import { Link } from "@inertiajs/react";
import { User } from '@/types';

const Navbar = ({ user } : { user: User | null }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl flex items-center">
                    <img src="/storage/images/logo.png" alt="Logo Perusahaan" className="h-10 w-auto" />
                </Link>
            </div>

            <div className="flex-1 justify-center hidden lg:flex mr-96">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Category</summary>
                            <ul className="p-2 absolute bg-base-100 shadow-lg z-50">
                                <li><Link href="#">Sepak Bola</Link></li>
                                <li><Link href="#">Volly</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href="#">Kontak Kami</Link></li>
                    <li><Link href="#">Tentang Kami</Link></li>
                    <li><Link href="#">FAQ</Link></li>
                </ul>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="User Avatar" src="/storage/images/user.png" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            user ? (
                                <>
                                    <li>
                                        <Link href={route('dashboard')} as="button" className="justify-between">
                                            Dashboard
                                            <span className="badge">Berita</span>
                                        </Link>
                                    </li>
                                    <li><Link href={route('logout')} method="post" as="button">Logout</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link href={route('login')} as="button">Login</Link></li>
                                    <li><Link href={route('register')} as="button">Registrasi</Link></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;