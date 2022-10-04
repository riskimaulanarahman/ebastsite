-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 17, 2022 at 06:19 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebast`
--

-- --------------------------------------------------------

--
-- Table structure for table `initial_sistem`
--

CREATE TABLE `initial_sistem` (
  `nama_lembaga` varchar(225) DEFAULT NULL,
  `nama_kontak_person` varchar(225) DEFAULT NULL,
  `telepon` varchar(225) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `draft_surat_keluar` text DEFAULT NULL,
  `directory_arsip_surat` varchar(225) DEFAULT NULL,
  `nomor_otomatis_surat_keluar` int(11) DEFAULT NULL,
  `nomor_otomatis_surat_pelayanan` int(11) DEFAULT NULL,
  `alamat_lembaga` varchar(225) DEFAULT NULL,
  `nama_kota_lembaga` varchar(225) DEFAULT NULL,
  `nama_kecamatan_lembaga` varchar(225) DEFAULT NULL,
  `nama_kelurahan_lembaga` varchar(225) DEFAULT NULL,
  `logo_lembaga` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `initial_sistem`
--

INSERT INTO `initial_sistem` (`nama_lembaga`, `nama_kontak_person`, `telepon`, `email`, `draft_surat_keluar`, `directory_arsip_surat`, `nomor_otomatis_surat_keluar`, `nomor_otomatis_surat_pelayanan`, `alamat_lembaga`, `nama_kota_lembaga`, `nama_kecamatan_lembaga`, `nama_kelurahan_lembaga`, `logo_lembaga`) VALUES
('Kelurahan Telaga Sari', 'KAMSANI', '0800000000', 'telagasaribalikpapan@gmail.com', NULL, 'c:\\xampp\\SiAgenTalas\\output\\arsip_surat', 201, 430, 'Jln. RE Martadinata No.10', 'Balikpapan', 'Balikpapan Kota', 'Telaga Sari', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `log_sendmail`
--

CREATE TABLE `log_sendmail` (
  `id` int(11) NOT NULL,
  `module` varchar(100) DEFAULT NULL,
  `id_users` int(11) DEFAULT NULL,
  `mailto` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `log_sendmail`
--

INSERT INTO `log_sendmail` (`id`, `module`, `id_users`, `mailto`, `status`, `keterangan`, `created_at`, `updated_at`) VALUES
(1, 'Vendor Submit', 2, 'reviewerebast@gmail.com', 'success', NULL, '2022-04-24 12:46:22', '2022-04-24 12:46:22'),
(2, 'Reviewer Submit', 3, 'spvebast@gmail.com', 'success', 'Pengajuan SQAC Doc. Selesai Di review', '2022-04-24 13:12:15', '2022-04-24 14:33:47'),
(3, 'Reviewer Submit', 3, 'vendor1ebast@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda di Rework by.Reviewer', '2022-04-24 13:20:34', '2022-04-24 14:33:29'),
(4, 'Reviewer Submit', 3, 'vendor1ebast@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda di Tolak by.Reviewer', '2022-04-24 13:21:31', '2022-04-24 14:33:23'),
(5, 'Reviewer Submit', 3, 'spvebast@gmail.com', 'success', 'Pengajuan SQAC Doc. Selesai Di review', '2022-04-24 13:22:15', '2022-04-24 14:30:06'),
(6, 'SPV Submit', 4, 'vendor1ebast@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda Telah di Approved by.SPV', '2022-04-24 13:29:49', '2022-04-24 14:33:12'),
(7, 'SPV Submit', 4, 'vendor1ebast@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda di Rework by.SPV', '2022-04-24 13:31:53', '2022-04-24 14:33:06'),
(8, 'Vendor Rework', 2, 'elsharionnn.official@gmail.com', 'success', 'Vendor Atas Nama vendor1 Telah melakukan pengajuan', '2022-04-24 13:46:53', '2022-04-24 13:46:53'),
(9, 'Vendor Rework', 2, 'elsharionnn.official@gmail.com', 'Expected response code 250 but got code \"530\", with message \"530 5.7.1 Authentication required\r\n\"', 'Vendor Atas Nama vendor1 Telah melakukan pengajuan', '2022-04-24 13:48:37', '2022-04-24 13:48:37'),
(10, 'Vendor Rework', 2, 'elsharionnn.official@gmail.com', 'Expected response code 250 but got code \"530\", with message \"530 5.7.1 Authentication required\r\n\"', 'Vendor Atas Nama vendor1 Telah melakukan pengajuan', '2022-04-24 13:52:02', '2022-04-24 13:52:02'),
(11, 'Vendor Rework', 2, 'elsharionnn.official@gmail.com', 'success', 'Vendor Atas Nama vendor1 Telah melakukan pengajuan', '2022-04-24 13:53:39', '2022-04-24 13:53:39'),
(12, 'Reviewer Submit', 3, 'elsharionnn@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda di Rework by.Reviewer', '2022-04-24 13:55:22', '2022-04-24 13:55:22'),
(13, 'Reviewer Submit', 3, 'elsharionnn@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda di Rework by.Reviewer', '2022-04-24 14:50:00', '2022-04-24 14:50:00'),
(14, 'Vendor Submit', 2, 'reviewerskripsi@gmail.com', 'Failed to authenticate on SMTP server with username \"admiskripsi1@gmail.com\" using 3 possible authen', 'Vendor Atas Nama Vend Telah melakukan pengajuan, dan membutuhkan approval anda', '2022-04-24 15:13:30', '2022-04-24 15:13:30'),
(15, 'Vendor Submit', 2, 'reviewerskripsi@gmail.com', 'success', 'Vendor Atas Nama Vend Telah melakukan pengajuan, dan membutuhkan approval anda', '2022-04-24 15:17:37', '2022-04-24 15:17:37'),
(16, 'Vendor Submit', 2, 'reviewerskripsi@gmail.com', 'success', 'Vendor Atas Nama Vend Telah melakukan pengajuan, dan membutuhkan approval anda', '2022-04-24 15:21:21', '2022-04-24 15:21:21'),
(17, 'Reviewer Submit', 3, 'spvskripsi@gmail.com', 'success', 'Pengajuan SQAC Doc. Selesai Di review', '2022-04-24 15:23:53', '2022-04-24 15:23:53'),
(18, 'SPV Submit', 4, 'vendor1skripsi@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda Telah di Approved', '2022-04-24 15:31:01', '2022-04-24 15:31:01'),
(19, 'SPV Submit', 4, 'vendor1skripsi@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda Telah di Approved', '2022-04-24 15:33:09', '2022-04-24 15:33:09'),
(20, 'SQAC Status', 4, 'vendor1skripsi@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda Telah di Approved', '2022-04-24 15:43:22', '2022-04-24 15:43:22'),
(21, 'SQAC Status', 4, 'vendor1skripsi@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda Telah di Approved', '2022-04-24 15:44:47', '2022-04-24 15:44:47'),
(22, 'SQAC Status', 4, 'vendor1skripsi@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda Telah di Approved', '2022-04-24 15:46:43', '2022-04-24 15:46:43'),
(23, 'New Submit SQAC. Request', 2, 'reviewerskripsi@gmail.com', 'success', 'Vendor Atas Nama vendor1 Telah melakukan pengajuan, dan membutuhkan approval anda', '2022-05-09 07:49:17', '2022-05-09 07:49:17'),
(24, 'SQAC already Reviewed', 3, 'spvskripsi@gmail.com', 'success', 'Pengajuan SQAC Doc. Selesai Di review', '2022-05-10 12:32:21', '2022-05-10 12:32:21'),
(25, 'SQAC Status', 4, 'vendor1skripsi@gmail.com', 'success', 'Pengajuan SQAC Doc. Anda Telah di Approved', '2022-05-10 12:33:05', '2022-05-10 12:33:05');

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
(1, '2021_04_05_055015_create_sessions_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('ookBdVJvIixxxfSgi7aw4E2DVwBS7bOiOLlvxr3z', 1, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiOG1LclBTRUh6a2JXSjVZMkR4M1g2cm5wZEptTHEzclBwRm5KcGpvaCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjMzOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvc3VyYXQtbWFzdWsiO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=', 1628519639);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_approver`
--

CREATE TABLE `tbl_approver` (
  `id` int(11) NOT NULL,
  `id_users` int(11) DEFAULT NULL,
  `sequence` int(11) DEFAULT NULL,
  `isfinal` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_approver`
--

INSERT INTO `tbl_approver` (`id`, `id_users`, `sequence`, `isfinal`, `created_at`, `updated_at`) VALUES
(1, 3, 1, 0, NULL, NULL),
(2, 4, 2, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sqac`
--

CREATE TABLE `tbl_sqac` (
  `id` int(11) NOT NULL,
  `id_users` int(11) UNSIGNED DEFAULT NULL,
  `requeststatus` int(11) NOT NULL DEFAULT 0,
  `site_id` varchar(255) DEFAULT NULL,
  `site_no` varchar(255) DEFAULT NULL,
  `site_name` varchar(255) DEFAULT NULL,
  `scoope` varchar(255) DEFAULT NULL,
  `vendor` varchar(255) DEFAULT NULL,
  `po_number` varchar(255) DEFAULT NULL,
  `submitted_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_sqac`
--

INSERT INTO `tbl_sqac` (`id`, `id_users`, `requeststatus`, `site_id`, `site_no`, `site_name`, `scoope`, `vendor`, `po_number`, `submitted_date`, `created_at`, `updated_at`) VALUES
(9, 2, 4, 'BPP012ML1', 'BPP012', 'Gedung_Kesenian_Balikpapan', 'New Site', 'EID', '00001', '2022-05-09', '2022-05-09 07:18:27', '2022-05-10 12:33:05');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sqacapprover`
--

CREATE TABLE `tbl_sqacapprover` (
  `id` int(11) NOT NULL,
  `sqac_id` int(11) DEFAULT NULL,
  `approver_id` int(11) DEFAULT NULL,
  `approverstatus` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_sqacapprover`
--

INSERT INTO `tbl_sqacapprover` (`id`, `sqac_id`, `approver_id`, `approverstatus`, `created_at`, `updated_at`) VALUES
(5, 9, 1, 1, '2022-05-09 07:18:27', '2022-05-10 12:32:21'),
(6, 9, 2, 1, '2022-05-09 07:18:27', '2022-05-10 12:33:05');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sqacattachment`
--

CREATE TABLE `tbl_sqacattachment` (
  `id` int(11) NOT NULL,
  `sqac_id` int(11) DEFAULT NULL,
  `namefile` varchar(255) DEFAULT NULL,
  `typefile` varchar(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `status_spv` int(11) NOT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_sqacattachment`
--

INSERT INTO `tbl_sqacattachment` (`id`, `sqac_id`, `namefile`, `typefile`, `status`, `status_spv`, `remarks`, `created_at`, `updated_at`) VALUES
(16, 9, 'onair_1652086103_balikpapan.png', 'onair', 1, 1, NULL, '2022-05-09 07:48:23', '2022-05-10 12:32:58'),
(17, 9, 'lv_1652086108_balikpapan.png', 'lv', 1, 1, NULL, '2022-05-09 07:48:28', '2022-05-10 12:32:59'),
(18, 9, 'kpi4g_1652086114_balikpapan.png', 'kpi4g', 1, 1, NULL, '2022-05-09 07:48:34', '2022-05-10 12:33:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `nama_lengkap` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vendor` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_user` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama_lengkap`, `username`, `email`, `password`, `role`, `vendor`, `status_user`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin', 'admiskripsi1@gmail.com', '$2y$10$/DoA5h9Ycf.Fqt.AkRmtOe0Q49wQ2BbDGf4lMEooz/FL/Px9brYiy', 'admin', '', '1', NULL, '2021-08-08 14:30:42', '2021-08-08 21:14:10'),
(2, 'vendor1', 'vendor1', 'vendor1skripsi@gmail.com', '$2y$10$OZeQjkaMVVDX6IF/e6nPYuAuPl.hAxaJTM5QEvJ0maZ91c7IzF2Ky', 'vendor', 'EID', '1', NULL, '2022-02-24 07:19:14', '2022-02-24 07:19:14'),
(3, 'Yusva', 'reviewer1', 'reviewerskripsi@gmail.com', '$2y$10$CKNs1/zqzTBYlvSBk5Q9PutQ2.g8QC573Hs1HYYwFY3ywIjbKF1WC', 'reviewer', '', '1', NULL, '2022-02-24 07:19:50', '2022-02-24 07:19:50'),
(4, 'Bayu', 'spv1', 'spvskripsi@gmail.com', '$2y$10$mz8FD.8rN0rxwMWpzqVP2ezvNzpVhoT3aAz/XGjy1lwUg0BXz85qS', 'spv', '', '1', NULL, '2022-02-24 07:20:37', '2022-02-24 07:20:37');

-- --------------------------------------------------------

--
-- Stand-in structure for view `vwapproverlist`
-- (See below for the actual view)
--
CREATE TABLE `vwapproverlist` (
`id` int(11)
,`sqac_id` int(11)
,`approver_id` varchar(50)
,`approverstatus` int(11)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `waitingreviewer`
-- (See below for the actual view)
--
CREATE TABLE `waitingreviewer` (
`waiting` int(1)
,`approved` int(1)
,`rejected` int(1)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `waitingspv`
-- (See below for the actual view)
--
CREATE TABLE `waitingspv` (
`waiting` int(1)
,`approved` int(1)
,`rejected` int(1)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `waitingvendor`
-- (See below for the actual view)
--
CREATE TABLE `waitingvendor` (
`waiting` int(1)
,`approved` int(1)
,`rejected` int(1)
,`rework` int(1)
);

-- --------------------------------------------------------

--
-- Structure for view `vwapproverlist`
--
DROP TABLE IF EXISTS `vwapproverlist`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vwapproverlist`  AS SELECT `s`.`id` AS `id`, `s`.`sqac_id` AS `sqac_id`, `u`.`nama_lengkap` AS `approver_id`, `s`.`approverstatus` AS `approverstatus` FROM ((`tbl_sqacapprover` `s` left join `tbl_approver` `a` on(`s`.`approver_id` = `a`.`id`)) left join `users` `u` on(`a`.`id_users` = `u`.`id`)) ;

-- --------------------------------------------------------

--
-- Structure for view `waitingreviewer`
--
DROP TABLE IF EXISTS `waitingreviewer`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `waitingreviewer`  AS SELECT CASE WHEN `tbl_sqac`.`requeststatus` = 1 THEN 1 ELSE 0 END AS `waiting`, CASE WHEN `tbl_sqac`.`requeststatus` = 4 THEN 1 ELSE 0 END AS `approved`, CASE WHEN `tbl_sqac`.`requeststatus` = 5 THEN 1 ELSE 0 END AS `rejected` FROM `tbl_sqac` ;

-- --------------------------------------------------------

--
-- Structure for view `waitingspv`
--
DROP TABLE IF EXISTS `waitingspv`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `waitingspv`  AS SELECT CASE WHEN `tbl_sqac`.`requeststatus` = 2 THEN 1 ELSE 0 END AS `waiting`, CASE WHEN `tbl_sqac`.`requeststatus` = 4 THEN 1 ELSE 0 END AS `approved`, CASE WHEN `tbl_sqac`.`requeststatus` = 5 THEN 1 ELSE 0 END AS `rejected` FROM `tbl_sqac` ;

-- --------------------------------------------------------

--
-- Structure for view `waitingvendor`
--
DROP TABLE IF EXISTS `waitingvendor`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `waitingvendor`  AS SELECT CASE WHEN `tbl_sqac`.`requeststatus` = 1 OR `tbl_sqac`.`requeststatus` = 2 THEN 1 ELSE 0 END AS `waiting`, CASE WHEN `tbl_sqac`.`requeststatus` = 4 THEN 1 ELSE 0 END AS `approved`, CASE WHEN `tbl_sqac`.`requeststatus` = 5 THEN 1 ELSE 0 END AS `rejected`, CASE WHEN `tbl_sqac`.`requeststatus` = 3 THEN 1 ELSE 0 END AS `rework` FROM `tbl_sqac` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `log_sendmail`
--
ALTER TABLE `log_sendmail`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `tbl_approver`
--
ALTER TABLE `tbl_approver`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_sqac`
--
ALTER TABLE `tbl_sqac`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_tbl_sqac_users` (`id_users`);

--
-- Indexes for table `tbl_sqacapprover`
--
ALTER TABLE `tbl_sqacapprover`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_tbl_sqacapprover_tbl_sqac` (`sqac_id`);

--
-- Indexes for table `tbl_sqacattachment`
--
ALTER TABLE `tbl_sqacattachment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attach_sqac` (`sqac_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `users_email_unique` (`email`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `log_sendmail`
--
ALTER TABLE `log_sendmail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_approver`
--
ALTER TABLE `tbl_approver`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_sqac`
--
ALTER TABLE `tbl_sqac`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_sqacapprover`
--
ALTER TABLE `tbl_sqacapprover`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_sqacattachment`
--
ALTER TABLE `tbl_sqacattachment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_sqac`
--
ALTER TABLE `tbl_sqac`
  ADD CONSTRAINT `FK_tbl_sqac_users` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tbl_sqacapprover`
--
ALTER TABLE `tbl_sqacapprover`
  ADD CONSTRAINT `FK_tbl_sqacapprover_tbl_sqac` FOREIGN KEY (`sqac_id`) REFERENCES `tbl_sqac` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tbl_sqacattachment`
--
ALTER TABLE `tbl_sqacattachment`
  ADD CONSTRAINT `attach_sqac` FOREIGN KEY (`sqac_id`) REFERENCES `tbl_sqac` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
