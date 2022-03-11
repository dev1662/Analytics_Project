-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 11, 2022 at 03:01 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vue`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `priority_keyword_id` int(11) NOT NULL,
  `client_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_id` int(11) NOT NULL,
  `date_published` date NOT NULL,
  `writer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `topic` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `focus_keyword` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `approval` tinyint(1) NOT NULL,
  `doc_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_images` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `article_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NO comments'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `priority_keyword_id`, `client_id`, `company_id`, `date_published`, `writer`, `topic`, `focus_keyword`, `status`, `approval`, `doc_link`, `banner_images`, `article_link`, `created_at`, `updated_at`, `comment`) VALUES
(2, 1, 'anshbsm', 1, '2021-02-21', 'Nazma', 'How to last longer in bed', 'last longer in bed', 'Written', 0, 'https://docs.google.com/document/u/2/d/1TO7elLvz3IAukXIR_g4b86Z_l2Z6nKD-E-xxEcAoNPg/edit', 'uploads/aNqJ8dPPEUsPMPhMgnBswGY21sJ5lqkSEZ4Qq0Em.png', 'https://mymuse.in/blogs/musings/how-to-last-longer-in-bed', '2021-12-09 04:23:58', '2022-01-10 01:55:13', '[\"World\",\"bad\"]'),
(3, 6, 'anshbsm', 1, '2021-02-21', 'Nazma', 'How to last longer in bed', 'last longer in bed', 'Written', 0, 'https://docs.google.com/document/u/2/d/1TO7elLvz3IAukXIR_g4b86Z_l2Z6nKD-E-xxEcAoNPg/edit', 'uploads/bqvahlHypv5qKxvmOu9RyDgIqs4eHuSF75b98h3A.jpg', 'https://mymuse.in/blogs/musings/how-to-last-longer-in-bed', '2021-12-09 04:47:13', '2022-01-05 05:43:18', 'Better'),
(4, 1, 'anshbsm', 1, '2021-02-21', 'Nazma', 'How to last longer in bed', 'last longer in bed', 'Written', 0, 'https://docs.google.com/document/u/2/d/1TO7elLvz3IAukXIR_g4b86Z_l2Z6nKD-E-xxEcAoNPg/edit', 'uploads/wyTg1CgjtqsSiHlyxrMhcB34Ym3MDCaAYQIbRE8G.png', 'https://mymuse.in/blogs/musings/how-to-last-longer-in-bed', '2021-12-09 05:20:32', '2022-01-05 09:17:25', 'Bad Article'),
(18, 1, '1', 1, '2021-12-15', 'Dev Sindhwani', 'Dev Sindhwani', 'Dev Sindhwani', 'Dev Sindhwani', 1, 'Dev Sindhwani', 'uploads/wyTg1CgjtqsSiHlyxrMhcB34Ym3MDCaAYQIbRE8G.png', 'Dev Sindhwani', '2021-12-15 08:19:34', '2021-12-15 08:19:34', 'NO comments'),
(19, 1, '1', 1, '2021-12-16', 'Ajay', 'How to file upload', 'FIle Upload', 'Written', 1, 'www.google.com', 'uploads/BWF62Qm3oT7WKLQJNEhCLgzZkqjsP582ND9WCvcc.png', 'www.youtube.com', '2021-12-15 22:41:22', '2021-12-15 22:41:22', 'NO comments'),
(20, 1, '1', 1, '2021-12-18', 'G', 'G', 'G', 'G', 1, 'G', 'uploads/wBfXW6UfwXBs2SV9CofA9WNnx4Woj4506qmBHCJ8.jpg', 'G', '2021-12-18 09:30:17', '2021-12-24 00:31:02', 'NO comments');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(20) DEFAULT NULL,
  `source` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keyword` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `reply_id` int(20) DEFAULT NULL,
  `start` int(11) DEFAULT NULL,
  `end` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2021_12_09_083002_create_articles_table', 2),
(6, '2021_12_09_084011_create_priority_keywords_table', 3),
(7, '2022_01_05_093333_create_comments_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `priority_keywords`
--

CREATE TABLE `priority_keywords` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `comapny_id` int(11) NOT NULL,
  `client_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `priority_keyword` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `priority_keywords`
--

INSERT INTO `priority_keywords` (`id`, `comapny_id`, `client_id`, `priority_keyword`, `created_at`, `updated_at`) VALUES
(1, 1, 'abcdghsjs14552', 'Hello World', '2021-12-09 04:40:28', '2021-12-12 09:07:12'),
(6, 1, 'fersdwertyu24587', 'Relaxed Massage Oil', '2021-12-12 22:07:01', '2021-12-12 22:22:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `access_token` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `refresh_token` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `startTime` time NOT NULL,
  `expiryTime` datetime NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `access_token`, `refresh_token`, `startTime`, `expiryTime`, `remember_token`, `created_at`, `updated_at`) VALUES
(11, NULL, NULL, NULL, NULL, 'ya29.A0ARrdaM94lKj0a_3giCzeOpTLrgGP4npriAM9CJ59IvkobY3l43BX88AWnhO59CGNntgRC3GgFwgkRUhUX1oYbr9GQYPeI61dhKgHCWsLmC7f2lfC8vVAJFs59ruCRh_uZyJjdd5MoccItSkqAZApVlEc6dr1', '1//0gJNg5XVwtUnHCgYIARAAGBASNwF-L9IrOK6S_ghHdYvxW9iE5wjFQueNQNRkwEDuNdTGukVPac0rklLhoCbHpVDS7nZOweCBO0o', '19:05:00', '2022-03-11 19:06:01', NULL, '2022-03-11 13:35:01', '2022-03-11 13:35:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `priority_keywords`
--
ALTER TABLE `priority_keywords`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `priority_keywords`
--
ALTER TABLE `priority_keywords`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
