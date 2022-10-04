-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.13-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table ebast.initial_sistem
CREATE TABLE IF NOT EXISTS `initial_sistem` (
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

-- Dumping data for table ebast.initial_sistem: ~0 rows (approximately)
/*!40000 ALTER TABLE `initial_sistem` DISABLE KEYS */;
INSERT INTO `initial_sistem` (`nama_lembaga`, `nama_kontak_person`, `telepon`, `email`, `draft_surat_keluar`, `directory_arsip_surat`, `nomor_otomatis_surat_keluar`, `nomor_otomatis_surat_pelayanan`, `alamat_lembaga`, `nama_kota_lembaga`, `nama_kecamatan_lembaga`, `nama_kelurahan_lembaga`, `logo_lembaga`) VALUES
	('Kelurahan Telaga Sari', 'KAMSANI', '0800000000', 'telagasaribalikpapan@gmail.com', NULL, 'c:\\xampp\\SiAgenTalas\\output\\arsip_surat', 201, 430, 'Jln. RE Martadinata No.10', 'Balikpapan', 'Balikpapan Kota', 'Telaga Sari', NULL);
/*!40000 ALTER TABLE `initial_sistem` ENABLE KEYS */;

-- Dumping structure for table ebast.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table ebast.migrations: ~0 rows (approximately)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2021_04_05_055015_create_sessions_table', 1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Dumping structure for table ebast.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table ebast.sessions: ~1 rows (approximately)
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
	('ookBdVJvIixxxfSgi7aw4E2DVwBS7bOiOLlvxr3z', 1, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiOG1LclBTRUh6a2JXSjVZMkR4M1g2cm5wZEptTHEzclBwRm5KcGpvaCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjMzOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvc3VyYXQtbWFzdWsiO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=', 1628519639);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;

-- Dumping structure for table ebast.tbl_approver
CREATE TABLE IF NOT EXISTS `tbl_approver` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_users` int(11) DEFAULT NULL,
  `sequence` int(11) DEFAULT NULL,
  `isfinal` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table ebast.tbl_approver: ~2 rows (approximately)
/*!40000 ALTER TABLE `tbl_approver` DISABLE KEYS */;
INSERT INTO `tbl_approver` (`id`, `id_users`, `sequence`, `isfinal`, `created_at`, `updated_at`) VALUES
	(1, 3, 1, 0, NULL, NULL),
	(2, 4, 2, 1, NULL, NULL);
/*!40000 ALTER TABLE `tbl_approver` ENABLE KEYS */;

-- Dumping structure for table ebast.tbl_sqac
CREATE TABLE IF NOT EXISTS `tbl_sqac` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_users` int(11) unsigned DEFAULT NULL,
  `requeststatus` int(11) NOT NULL DEFAULT 0,
  `site_no` varchar(255) DEFAULT NULL,
  `site_name` varchar(255) DEFAULT NULL,
  `scoope` varchar(255) DEFAULT NULL,
  `vendor` varchar(255) DEFAULT NULL,
  `document` varchar(255) DEFAULT NULL,
  `submitted_date` date DEFAULT NULL,
  `aging` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK_tbl_sqac_users` (`id_users`),
  CONSTRAINT `FK_tbl_sqac_users` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table ebast.tbl_sqac: ~0 rows (approximately)
/*!40000 ALTER TABLE `tbl_sqac` DISABLE KEYS */;
INSERT INTO `tbl_sqac` (`id`, `id_users`, `requeststatus`, `site_no`, `site_name`, `scoope`, `vendor`, `document`, `submitted_date`, `aging`, `created_at`, `updated_at`) VALUES
	(8, 2, 4, 'bpp331', 'bpp', '1', 'EID', 'a', '2022-04-08', '2', '2022-04-01 10:18:07', '2022-04-06 11:32:37');
/*!40000 ALTER TABLE `tbl_sqac` ENABLE KEYS */;

-- Dumping structure for table ebast.tbl_sqacapprover
CREATE TABLE IF NOT EXISTS `tbl_sqacapprover` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sqac_id` int(11) DEFAULT NULL,
  `approver_id` int(11) DEFAULT NULL,
  `approverstatus` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_sqacapprover_tbl_sqac` (`sqac_id`),
  CONSTRAINT `FK_tbl_sqacapprover_tbl_sqac` FOREIGN KEY (`sqac_id`) REFERENCES `tbl_sqac` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table ebast.tbl_sqacapprover: ~2 rows (approximately)
/*!40000 ALTER TABLE `tbl_sqacapprover` DISABLE KEYS */;
INSERT INTO `tbl_sqacapprover` (`id`, `sqac_id`, `approver_id`, `approverstatus`, `created_at`, `updated_at`) VALUES
	(3, 8, 1, 1, '2022-04-01 10:18:07', '2022-04-06 11:30:21'),
	(4, 8, 2, 1, '2022-04-01 10:18:07', '2022-04-06 11:32:37');
/*!40000 ALTER TABLE `tbl_sqacapprover` ENABLE KEYS */;

-- Dumping structure for table ebast.tbl_sqacattachment
CREATE TABLE IF NOT EXISTS `tbl_sqacattachment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sqac_id` int(11) DEFAULT NULL,
  `namefile` varchar(255) DEFAULT NULL,
  `typefile` varchar(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `status_spv` int(11) NOT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `attach_sqac` (`sqac_id`),
  CONSTRAINT `attach_sqac` FOREIGN KEY (`sqac_id`) REFERENCES `tbl_sqac` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table ebast.tbl_sqacattachment: ~2 rows (approximately)
/*!40000 ALTER TABLE `tbl_sqacattachment` DISABLE KEYS */;
INSERT INTO `tbl_sqacattachment` (`id`, `sqac_id`, `namefile`, `typefile`, `status`, `status_spv`, `remarks`, `created_at`, `updated_at`) VALUES
	(12, 8, 'onair_1648783130_1.jpeg', 'onair', 1, 1, NULL, '2022-04-01 10:18:50', '2022-04-06 11:31:07'),
	(13, 8, 'lv_1649219315_2.jpeg', 'lv', 1, 1, NULL, '2022-04-01 10:18:55', '2022-04-06 11:31:10'),
	(15, 8, 'kpi4g_1648784516_3.jpeg', 'kpi4g', 1, 1, NULL, '2022-04-01 10:41:56', '2022-04-06 11:31:12');
/*!40000 ALTER TABLE `tbl_sqacattachment` ENABLE KEYS */;

-- Dumping structure for table ebast.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nama_lengkap` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vendor` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_user` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `users_email_unique` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table ebast.users: ~4 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `nama_lengkap`, `username`, `email`, `password`, `role`, `vendor`, `status_user`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'admin', 'admin', 'admin@mail.com', '$2y$10$/DoA5h9Ycf.Fqt.AkRmtOe0Q49wQ2BbDGf4lMEooz/FL/Px9brYiy', 'admin', '', '1', NULL, '2021-08-08 22:30:42', '2021-08-09 05:14:10'),
	(2, 'vendor1', 'vendor1', 'vendor1ebast@gmail.com', '$2y$10$OZeQjkaMVVDX6IF/e6nPYuAuPl.hAxaJTM5QEvJ0maZ91c7IzF2Ky', 'vendor', 'EID', '1', NULL, '2022-02-24 15:19:14', '2022-02-24 15:19:14'),
	(3, 'reviewer1', 'reviewer1', 'reviewerebast@gmail.com', '$2y$10$CKNs1/zqzTBYlvSBk5Q9PutQ2.g8QC573Hs1HYYwFY3ywIjbKF1WC', 'reviewer', '', '1', NULL, '2022-02-24 15:19:50', '2022-02-24 15:19:50'),
	(4, 'spv1', 'spv1', 'spvebast@gmail.com', '$2y$10$mz8FD.8rN0rxwMWpzqVP2ezvNzpVhoT3aAz/XGjy1lwUg0BXz85qS', 'spv', '', '1', NULL, '2022-02-24 15:20:37', '2022-02-24 15:20:37');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for view ebast.vwapproverlist
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `vwapproverlist` (
	`id` INT(11) NOT NULL,
	`sqac_id` INT(11) NULL,
	`approver_id` VARCHAR(50) NULL COLLATE 'utf8mb4_unicode_ci',
	`approverstatus` INT(11) NULL
) ENGINE=MyISAM;

-- Dumping structure for view ebast.waitingreviewer
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `waitingreviewer` (
	`waiting` INT(1) NOT NULL,
	`approved` INT(1) NOT NULL,
	`rejected` INT(1) NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view ebast.waitingspv
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `waitingspv` (
	`waiting` INT(1) NOT NULL,
	`approved` INT(1) NOT NULL,
	`rejected` INT(1) NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view ebast.waitingvendor
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `waitingvendor` (
	`waiting` INT(1) NOT NULL,
	`approved` INT(1) NOT NULL,
	`rejected` INT(1) NOT NULL,
	`rework` INT(1) NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view ebast.vwapproverlist
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `vwapproverlist`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `vwapproverlist` AS SELECT `s`.`id` AS `id`, `s`.`sqac_id` AS `sqac_id`, `u`.`nama_lengkap` AS `approver_id`, `s`.`approverstatus` AS `approverstatus` FROM ((`tbl_sqacapprover` `s` left join `tbl_approver` `a` on(`s`.`approver_id` = `a`.`id`)) left join `users` `u` on(`a`.`id_users` = `u`.`id`)) ;

-- Dumping structure for view ebast.waitingreviewer
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `waitingreviewer`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `waitingreviewer` AS SELECT
case when requeststatus = 1 THEN 1 ELSE 0 END as waiting,case when requeststatus = 4 THEN 1 ELSE 0 END as approved,case when requeststatus = 5 THEN 1 ELSE 0 END as rejected
FROM tbl_sqac ;

-- Dumping structure for view ebast.waitingspv
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `waitingspv`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `waitingspv` AS SELECT
case when requeststatus = 2 THEN 1 ELSE 0 END as waiting,case when requeststatus = 4 THEN 1 ELSE 0 END as approved,case when requeststatus = 5 THEN 1 ELSE 0 END as rejected
FROM tbl_sqac ;

-- Dumping structure for view ebast.waitingvendor
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `waitingvendor`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `waitingvendor` AS SELECT
case when (requeststatus = 1 or requeststatus = 2) THEN 1 ELSE 0 END as waiting,case when requeststatus = 4 THEN 1 ELSE 0 END as approved,case when requeststatus = 5 THEN 1 ELSE 0 END as rejected,case when requeststatus = 3 THEN 1 ELSE 0 END as rework
FROM tbl_sqac ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
