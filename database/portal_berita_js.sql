-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 14 Des 2024 pada 23.30
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal_berita_js`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `beritas`
--

CREATE TABLE `beritas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `beritas`
--

INSERT INTO `beritas` (`id`, `title`, `description`, `category`, `author`, `created_at`, `updated_at`, `image`) VALUES
(70, 'Bang Ronaldo', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae voluptates labore totam excepturi similique illo quia nam in! Quasi illum sequi repellendus! Iste, qui doloremque. Itaque repudiandae voluptates consectetur est magnam, recusandae quibusdam, facilis dicta incidunt assumenda quia consequuntur non velit necessitatibus nulla et illum a. Incidunt quibusdam, qui aliquam ut nihil tempora dolor suscipit, nulla quaerat laudantium sequi?', 'Bola', 'admin@gmail.com', '2024-10-07 23:04:19', '2024-10-14 12:42:42', 'images/DDFuRwAxCuEFL4gyWvXiSpOy2TlKiA2uMDpywDCg.jpg'),
(71, 'Bang CR7 Bermain di Liga Arab', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae voluptates labore totam excepturi similique illo quia nam in! Quasi illum sequi repellendus! Iste, qui doloremque. Itaque repudiandae voluptates consectetur est magnam, recusandae quibusdam, facilis dicta incidunt assumenda quia consequuntur non velit necessitatibus nulla et illum a. Incidunt quibusdam, qui aliquam ut nihil tempora dolor suscipit, nulla quaerat laudantium sequi?', 'Sepak Bola', 'admin@gmail.com', '2024-10-10 18:10:21', '2024-10-14 12:59:17', 'images/POt5WHFUfuDgJ5Izb2OxEz4Rq9GQXqsDOaIIEXm0.jpg'),
(72, 'Ronaldo from Portugal', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae voluptates labore totam excepturi similique illo quia nam in! Quasi illum sequi repellendus! Iste, qui doloremque. Itaque repudiandae voluptates consectetur est magnam, recusandae quibusdam, facilis dicta incidunt assumenda quia consequuntur non velit necessitatibus nulla et illum a. Incidunt quibusdam, qui aliquam ut nihil tempora dolor suscipit, nulla quaerat laudantium sequi?', 'Sepak Bola', 'admin@gmail.com', '2024-10-10 18:11:24', '2024-10-14 12:53:04', 'images/MIJvn1OprOufxT5Tw6igorL66O1Ka4SJ82mA1v8P.jpg'),
(73, 'Cristiano Ronaldo', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae voluptates labore totam excepturi similique illo quia nam in! Quasi illum sequi repellendus! Iste, qui doloremque. Itaque repudiandae voluptates consectetur est magnam, recusandae quibusdam, facilis dicta incidunt assumenda quia consequuntur non velit necessitatibus nulla et illum a. Incidunt quibusdam, qui aliquam ut nihil tempora dolor suscipit, nulla quaerat laudantium sequi?', 'Sepak Bola', 'admin@gmail.com', '2024-10-10 18:12:04', '2024-10-14 11:49:09', 'images/waiwe1nRmA1wMzUQlv6UGPSZF8didGjOASyU8VnL.jpg'),
(75, 'Ronaldo', 'jajan ke anaknya USD20.000 dolar atau setara Rp300 juta per minggu. Uang jajan ini diberikan Cristiano Ronaldo untuk mendukung gaya hidup anaknya.  Uang jajan biasa digunakan oleh anaknya untuk memotong rambut, menutup restoran untuk acara pribadi dan kegiatan yang dilakukan bersama sang kekasih, demikian pernyataan Cristiano Ronaldo dikutip dari laman Instagram willtoact.official.', 'Bola', 'admin@gmail.com', '2024-10-22 01:27:56', '2024-10-22 06:45:13', 'images/sM2vbG5yAkO3Jn8U0q5FSutYZJyTECmcihdHkpak.jpg'),
(77, 'ABCD', 'abcdefghij', 'Sepak bola', 'admin@gmail.com', '2024-11-07 14:52:13', '2024-11-07 14:52:13', 'images/VodW5qElMzyOOxHPYell6qtoThPHjPRdGTkBJjIj.jpg'),
(78, 'AKu', 'Uka', 'Bola', 'admin@gmail.com', '2024-11-07 16:48:06', '2024-11-07 16:48:06', 'images/Dlcsb3uXRliWh6EkbpcQaWP7mLqbp17PQMprxCqg.jpg'),
(79, 'qqqqqqqqqqqqqqqq', 'qqwqwd', 'qwqwddssdasdqwdqsdsa', 'admin@gmail.com', '2024-11-07 16:55:58', '2024-11-07 16:55:58', 'images/r9rCdLVktR3f0NkTkAbjRUtwjSG8S68DYwnYW16g.jpg'),
(80, 'AAABBBCCC', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, placeat? Similique minima tempore hic explicabo quam, nesciunt voluptates ab alias deserunt doloremque. Libero suscipit ipsa fuga repellat minima consequuntur debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, placeat? Similique minima tempore hic explicabo quam, nesciunt voluptates ab alias deserunt doloremque. Libero suscipit ipsa fuga repellat minima consequuntur debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, placeat? Similique minima tempore hic explicabo quam, nesciunt voluptates ab alias deserunt doloremque. Libero suscipit ipsa fuga repellat minima consequuntur debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, placeat? Similique minima tempore hic explicabo quam, nesciunt voluptates ab alias deserunt doloremque. Libero suscipit ipsa fuga repellat minima consequuntur debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, placeat? Similique minima tempore hic explicabo quam, nesciunt voluptates ab alias deserunt doloremque. Libero suscipit ipsa fuga repellat minima consequuntur debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, placeat? Similique minima tempore hic explicabo quam, nesciunt voluptates ab alias deserunt doloremque. Libero suscipit ipsa fuga repellat minima consequuntur debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, placeat? Similique minima tempore hic explicabo quam, nesciunt voluptates ab alias deserunt doloremque. Libero suscipit ipsa fuga repellat minima consequuntur debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, placeat? Similique minima tempore hic explicabo quam, nesciunt voluptates ab alias deserunt doloremque. Libero suscipit ipsa fuga repellat minima consequuntur debitis.', 'Apa Aja', 'admin@gmail.com', '2024-11-13 04:37:25', '2024-11-13 04:37:25', 'images/vZ4w6MvoVnuhQphvsgF6QD7f7fQpQ5Sj56FUv9iv.jpg'),
(81, 'abc', 'abc', 'Bola', 'admin@gmail.com', '2024-12-14 15:16:48', '2024-12-14 15:16:48', 'images/0gbdhEcBaQQ1WVaxLMYcLLqYJOpCOEdCmEaVNdSp.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('abc@gmail.com|127.0.0.1', 'i:1;', 1729600795),
('abc@gmail.com|127.0.0.1:timer', 'i:1729600795;', 1729600795),
('admin@gmail.coma|127.0.0.1', 'i:1;', 1731050050),
('admin@gmail.coma|127.0.0.1:timer', 'i:1731050050;', 1731050050);

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(13, '0001_01_01_000000_create_users_table', 1),
(14, '0001_01_01_000001_create_cache_table', 1),
(15, '0001_01_01_000002_create_jobs_table', 1),
(16, '2024_09_05_095122_create_beritas_table', 1),
(17, '2024_10_05_005154_add_image_to_beritas_table', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('6gaC39W5OUe5SktjdWLxlpEjqWTfjqmVwJ9v418m', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoicU5tWTVMWldXanNSdUZudEt5WEVxeUREcUlBNWhuQ3BqV213UlhieCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=', 1734214608),
('8oJGzbXdd8ACwt33RX8RsaZXeFtjdkcwQcxgcuSr', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiQ25tZzY2MnpFNXZmZXh2UmtpYXJwcGNuWU9OMnVWWEpJamx1UlJBSiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7fQ==', 1731729405),
('90HPP0r0loxOpR6lvyrSa1m3OuExhAiqiKFQudOC', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoidlR1bE9XZXNEUmtmTVpvT0U2ZmdJYWM5Z0VaTlRHTXF5MWlrU0pzYiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcnRpa2VsIjt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTt9', 1731507092),
('HG9MplQQnMGC0DGCi5yL10H7Vzs6IOdyxwrbOk5G', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicFF6MmtZdXRma0Ixb3pna1FkVVhwZnNha1ZTR3phaE16OUYxWXpFdiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1731497441);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', NULL, '$2y$12$AfHMXpFmiol/dfs/2KjnmuzpkwwTDfV6YRCsbx2tSHZHwlyegWWla', 'lqM4vsQXapHebugJVj7IZRxRY2nVeSDoRUqQlbZi0zQhsf7nIZoS4deJsqUH', '2024-09-09 17:55:30', '2024-09-09 17:55:30'),
(2, 'Bimooo', 'admin2@gmail.com', NULL, '$2y$12$InssReU4q.fQeIHoRyETIOc.T7ZUAwyx4g.JmdWSqFEMhly.Wy4E.', NULL, '2024-10-21 21:43:55', '2024-10-21 21:43:55'),
(3, '12', 'admin3@gmail.com', NULL, '$2y$12$kGADVm3DbgUc66j/8v4XE.faF6akLXoV4kQTmHowkoNCk/PRCalcS', NULL, '2024-10-22 05:50:10', '2024-10-22 05:50:10'),
(4, 'Bimo Ilham Bayuaji', 'admin4@gmail.com', NULL, '$2y$12$n0mYXIe2iVUkGq0m4iAmwOutmzW3XoTutBNN43KNd5AoaYBQRxFHW', NULL, '2024-10-22 05:52:27', '2024-10-22 05:52:27');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `beritas`
--
ALTER TABLE `beritas`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indeks untuk tabel `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `beritas`
--
ALTER TABLE `beritas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
