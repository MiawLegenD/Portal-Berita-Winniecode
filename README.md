# Portal Berita

**Portal Berita** adalah sebuah website yang berfungsi untuk mengelola dan menyajikan berita. Website ini dibangun menggunakan **Laravel Breeze** dan **Inertia.js**, serta didukung dengan Tailwind CSS.

## Fitur Utama
- Login & Register (Admin)
- CRUD Berita (Admin) terdiri dari Halaman Dashboard, Halaman Tambah Berita, Halaman Edit Berita.
- Halaman Landing Page untuk Pengunjung terdiri dari Landing Page, halaman Detail Berita.


## Import Database

- Pastikan sudah memiliki atau menginstal MySQL atau MariaDB di komputer Anda.
- Buat database baru di phpMyAdmin dengan nama `portal_berita_js`.
- Unduh file database `portal_berita_js.sql` dari [repo GitHub](https://github.com/MiawLegenD/Portal-Berita-Winniecode/tree/main/database).
- Kemudian coba lakukan import database di phpMyAdmin dan gunakan file database yang sudah didownload dari github sebelumnya.
- Setelah itu jalan kan perintah "php artisan migrade" di vscode dari root project.

## Langkah Selanjutnya

1. jalankan perintah 'npm run dev' dan 'php artisan serve' kemudian copy alamat url dari hasil menjalankan perintah 'php artisan serve' misal outputnya "http://127.0.0.1:8000"
2. Copy alamat url, kemudian paste di browser anda dan nanti akan tampil halaman landing page nya.

## Akun Login Admin

Bisa melakukan login dengan menggunakan akun dibawah ini:
email : admin@gmail.com
password : admin123

atau bisa membuat akun baru dengan mengakses fitur registrasi

Kemudian ketika sudah di halaman dashboard, coba ketikkan yang semula "http://127.0.0.1:8000/dashboard" di ganti menjadi "http://127.0.0.1:8000/artikel" untuk mengkases data yang sudah ada.

memang ini masih terjadi kendala dimana seharusnya ketika login bisa langsung menampilkan data yang telah dibuat. namun belum diselesaikan kembali masalah ini.
## Cara Instalasi dan Menjalankannya

1. Bisa clone repositori ini

git clone https://github.com/MiawLegenD/Portal-Berita-Winniecode.git
