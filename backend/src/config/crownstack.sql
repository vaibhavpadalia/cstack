-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2020 at 10:50 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crownstack`
--

-- --------------------------------------------------------

--
-- Table structure for table `exchange_data`
--

CREATE TABLE `exchange_data` (
  `id` int(11) NOT NULL,
  `country_name` varchar(20) DEFAULT NULL,
  `country_code` varchar(5) DEFAULT NULL,
  `exchange_rate` float DEFAULT NULL,
  `created_on` bigint(20) DEFAULT NULL,
  `updated_on` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `exchange_data`
--

INSERT INTO `exchange_data` (`id`, `country_name`, `country_code`, `exchange_rate`, `created_on`, `updated_on`) VALUES
(1, 'India', 'INR', 86.8615, 1599207854366, 1599207854366),
(2, 'Australia', 'AUD', 1.6219, 1599207854366, 1599207854366),
(3, 'Canada', 'CAD', 1.5491, 1599207854366, 1599207854366),
(4, 'Japan', 'JPY', 125.85, 1599207854366, 1599207854366);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `exchange_data`
--
ALTER TABLE `exchange_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `exchange_data`
--
ALTER TABLE `exchange_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
