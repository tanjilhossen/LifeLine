-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lifeline_db
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `applications`
--

DROP TABLE IF EXISTS `applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('donor','hospital') NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `location` varchar(150) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latitude` decimal(10,7) DEFAULT NULL,
  `longitude` decimal(10,7) DEFAULT NULL,
  `blood_group` enum('A+','B+','O+','AB+','A-','B-','O-','AB-') DEFAULT NULL,
  `profession` varchar(120) DEFAULT NULL,
  `donation_count` int DEFAULT NULL,
  `last_donation_date` date DEFAULT NULL,
  `age` int DEFAULT NULL,
  `health_notes` text,
  `contact_person` varchar(150) DEFAULT NULL,
  `license_number` varchar(120) DEFAULT NULL,
  `icu_available` int NOT NULL DEFAULT '0',
  `emergency_bed_available` int NOT NULL DEFAULT '0',
  `status` enum('Pending','Approved','Rejected') NOT NULL DEFAULT 'Pending',
  `review_message` text,
  `reviewed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_pending_email_type` (`type`,`email`,`status`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applications`
--

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
INSERT INTO `applications` VALUES (1,'donor','aaa','ex@gmail.com','1234','01893558863','asdas','Barisal, Barisal, Bangladesh',22.7037490,90.3704900,'A+','asdasd',2,'2026-05-28',20,'sadas',NULL,NULL,0,0,'Approved','আপনার LifeLine আবেদন approve হয়েছে। Login: ex@gmail.com, Dashboard: /donor-dashboard.html','2026-05-04 14:22:12','2026-05-03 16:52:53'),(2,'donor','mahadi','mahadi@gmail.com','1234','01700000000','Barishal Sadar, Barishal','Manual map selection',22.6847466,90.6472492,'A+','student',5,'2026-05-13',24,'HIV',NULL,NULL,0,0,'Approved','আপনার LifeLine আবেদন approve হয়েছে। Login: mahadi@gmail.com, Dashboard: /donor-dashboard.html','2026-05-13 16:13:13','2026-05-13 16:07:43');
/*!40000 ALTER TABLE `applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blood_requests`
--

DROP TABLE IF EXISTS `blood_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blood_requests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `blood_group` enum('A+','B+','O+','AB+','A-','B-','O-','AB-') NOT NULL,
  `location` varchar(150) NOT NULL,
  `district` varchar(100) DEFAULT NULL,
  `upazila` varchar(100) DEFAULT NULL,
  `latitude` decimal(10,7) DEFAULT NULL,
  `longitude` decimal(10,7) DEFAULT NULL,
  `hospital_name` varchar(255) NOT NULL,
  `needed_time` varchar(150) NOT NULL,
  `patient_disease` varchar(255) NOT NULL,
  `contact_number` varchar(30) NOT NULL,
  `tracking_token` varchar(80) DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  `status` enum('Pending','Completed','Cancelled') NOT NULL DEFAULT 'Pending',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tracking_token` (`tracking_token`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blood_requests`
--

LOCK TABLES `blood_requests` WRITE;
/*!40000 ALTER TABLE `blood_requests` DISABLE KEYS */;
INSERT INTO `blood_requests` VALUES (1,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'efasdf','4','gsgg','',NULL,NULL,'Pending','2026-05-10 17:19:03'),(2,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'asdasd','5:20','dsad','',NULL,NULL,'Pending','2026-05-10 17:41:24'),(3,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'asdasfsa','asdfasd','sadasd','01709965945',NULL,NULL,'Pending','2026-05-10 18:11:20'),(4,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'asdasfsa','asdfasd','sadasd','01709965945',NULL,NULL,'Pending','2026-05-10 18:22:31'),(5,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'asdasfas','adasdfasd','asfsdfa','asdsafasdfasd',NULL,NULL,'Pending','2026-05-12 09:00:38'),(6,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'asdasfas','4','asfsdfa','01709965945',NULL,NULL,'Pending','2026-05-12 09:06:53'),(7,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'asdasd','asda','asdas','asdasdffasd',NULL,NULL,'Pending','2026-05-12 09:13:27'),(8,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'sadfad','asfsafdf','asdasd','01893558863',NULL,NULL,'Pending','2026-05-12 12:06:15'),(9,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'asdasd','afsafsa','asdasd','asdasfa',NULL,NULL,'Pending','2026-05-12 15:53:54'),(10,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'asdasd','afsafsa','asdasd','asdasfa',NULL,NULL,'Pending','2026-05-12 15:55:06'),(11,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'asdasd','afsafsa','asdasd','asdasfa',NULL,NULL,'Pending','2026-05-12 15:55:37'),(12,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'asdasd','afsafsa','asdasd','asdasfa',NULL,NULL,'Pending','2026-05-12 16:02:26'),(13,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'asdasd','afsafsa','asdasd','asdasfa',NULL,NULL,'Pending','2026-05-12 16:21:23'),(14,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'afsaf','asdasd','asdasd','asdfasfas',NULL,NULL,'Pending','2026-05-12 16:38:42'),(15,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'dfasdas','asdasd','saddad','asdasdas',NULL,NULL,'Pending','2026-05-12 16:48:07'),(16,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'dfasdas','asdasd','saddad','asdasdas',NULL,NULL,'Pending','2026-05-12 16:50:05'),(17,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'dfasdas','asdasd','saddad','asdasdas',NULL,NULL,'Pending','2026-05-12 16:50:48'),(18,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'sdafasf','asfasf','asdasd','sdfasfasdfad',NULL,NULL,'Pending','2026-05-12 16:57:42'),(19,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'sdafasf','asfasf','asdasd','sdfasfasdfad',NULL,NULL,'Pending','2026-05-12 16:58:42'),(20,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'sdafasf','asfasf','asdasd','sdfasfasdfad',NULL,NULL,'Pending','2026-05-12 17:21:04'),(21,'A+','Barishal Sadar, Barishal',NULL,NULL,NULL,NULL,'sdafasf','asfasf','asdasd','sdfasfasdfad',NULL,NULL,'Pending','2026-05-12 17:22:02'),(22,'A+','Bhola Sadar, Bhola',NULL,NULL,NULL,NULL,'hgjhk','yjghk','ukgjjnjkm,','021563146532012',NULL,NULL,'Pending','2026-05-13 16:52:40'),(23,'A+','Barishal Sadar, Barishal','Barishal','Barishal Sadar',23.5552000,90.4153000,'sdadas','asdfasf','afasf','asfdasda','1e86774a3f54c243ce942a6b46f13a4e0580a2d71eef2d3f','2026-05-17 01:09:06','Pending','2026-05-16 19:04:06'),(24,'A+','Barishal Sadar, Barishal','Barishal','Barishal Sadar',23.5552000,90.4153000,'sdadasd','adfgdfsa','asdd','asdafasd','def869d711166b24bcbd7f009c2a83920805b723b9be0fc0','2026-05-17 01:10:47','Pending','2026-05-16 19:05:47'),(25,'A+','Barishal Sadar, Barishal','Barishal','Barishal Sadar',23.5552000,90.4153000,'adasd','asdasd','asdasd','asdasdasdas','657f635d3c6cd3118542057796d5445149aaf0fe98cf8aa3','2026-05-17 01:20:56','Pending','2026-05-16 19:15:56'),(26,'A+','Barishal Sadar, Barishal','Barishal','Barishal Sadar',23.5552000,90.4153000,'asdasd','asdasd','asda','asdsad','b59c26a412092738fc4fe16a1afa556b0c46b4f0470e64b6','2026-05-17 01:26:13','Pending','2026-05-16 19:21:13'),(27,'A+','Barishal Sadar, Barishal','Barishal','Barishal Sadar',22.7064100,90.3529900,'asfdsda','asdasd','asdasda','asdasd','653d300a41ea994718bdf9bfe217e4905de0a599ba273395','2026-05-17 01:38:15','Pending','2026-05-16 19:33:15'),(28,'A+','Barishal Sadar, Barishal','Barishal','Barishal Sadar',22.7178600,90.6563700,'sadasd','asdasd','asdasd','asdasdasd','620063bdf20238d4a03bffe684216f20ad401b3130e9428c','2026-05-17 02:12:54','Pending','2026-05-16 20:07:54'),(29,'A+','Barishal Sadar, Barishal','Barishal','Barishal Sadar',22.7212100,90.3400200,'sdasd','sddas','sadasd','dasdasd','33cfbecd0a6eb0fb73f1b0a8941fadf91544041b6e62ca12','2026-05-17 02:24:58','Pending','2026-05-16 20:19:58'),(30,'A+','Barishal Sadar, Barishal','Barishal','Barishal Sadar',23.5552000,90.4153000,'sadad','fasdf','asdasd','asdasd','9f05f866eaf1dcbe2973c13271b326f630d47ef1e846aa88','2026-05-17 21:28:13','Pending','2026-05-17 15:23:13'),(31,'A+','Barishal Sadar, Barishal','Barishal','Barishal Sadar',22.7041800,90.3706000,'sadas','asdas','asdas','asdasdasd','f17bcb62cfd3348c1cf889649ae103b7742377fd85859b7c','2026-05-17 23:18:03','Pending','2026-05-17 17:13:03'),(32,'O-','Demra, Dhaka','Dhaka','Demra',23.5552000,90.4153000,'dasf','asdasd','asdas','asdas','7ba52fcc02db2fe413273adddaaa7ea0041fef940c41dc57','2026-05-17 23:57:39','Pending','2026-05-17 17:52:39'),(33,'A+','Dhaka','Dhaka',NULL,23.5552000,90.4153000,'sfdad','asdasd','asdad','dsaa','b777c2f01d8c430421bd3e51ec972d13893ac27766d95cbb','2026-05-18 00:09:05','Pending','2026-05-17 17:59:04'),(34,'A+','Barishal','Barishal',NULL,22.7037490,90.3704900,'sadada','dasdsa','dasd','asdasdasd','b395356f6cf4ffd4fa902cde5dd9f8e8224244b585344ed0','2026-05-18 00:30:03','Pending','2026-05-17 18:25:03'),(35,'B+','Gulshan, Dhaka','Dhaka','Gulshan',23.7920860,90.4155100,'asda','asdsad','asdasd','asdadfasf','3d83d21ad7c5e2d665824598877737fd49b0523110b11a9b','2026-05-18 00:32:06','Pending','2026-05-17 18:27:06'),(36,'A+','Barishal','Barishal',NULL,22.6831750,90.6504820,'asadasd','asdas','asdad','asdasas','e52d233f93484a05e3755309509e6feff961364d364730d7','2026-05-21 00:17:45','Pending','2026-05-20 18:12:45'),(37,'A+','Bhola','Bhola',NULL,22.6867480,90.6469410,'asadasd','asdas','asdad','asdasas','3a92c73b72ac8f83c5f77f9e8bb4d42f71562144c89018bd','2026-05-21 00:18:27','Pending','2026-05-20 18:13:27'),(38,'A+','Cantonment, Dhaka','Dhaka','Cantonment',23.8103000,90.4125000,'jhgjg','jlj','jlkj','01709965945','776e6fb9f44345e26360619c423de37c630f2e1188336003','2026-05-21 21:14:43','Pending','2026-05-21 15:09:43'),(39,'A+','Barishal Sadar, Barishal','Barishal','Barishal Sadar',22.7047520,90.3707290,'serebangla','5:20','exampale','01893558863','1efd1f66ead4a38900505ca443da74db06d9c4b2c6154975','2026-05-22 20:39:59','Pending','2026-05-22 14:34:59'),(40,'A+','Barishal Sadar, Barishal','Barishal','Barishal Sadar',22.6877100,90.3525540,'শেরেবাংলা','5:20','exampal','01893558863','57e06b40cb0bb77aedd7ca994f1d0e4b3729b86a713e8865','2026-05-22 20:47:48','Pending','2026-05-22 14:42:48'),(41,'A+','Gendaria, Dhaka','Dhaka','Gendaria',23.7103700,90.4212160,'asdad','sdad','sada','01709965978','09d7ba80c944dde367d9d19685b2a20b4b6213f78753d75e','2026-05-31 01:34:13','Pending','2026-05-30 19:29:13');
/*!40000 ALTER TABLE `blood_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chamber_date_overrides`
--

DROP TABLE IF EXISTS `chamber_date_overrides`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chamber_date_overrides` (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int NOT NULL,
  `chamber_id` int NOT NULL,
  `override_date` date NOT NULL,
  `max_patients` int DEFAULT NULL,
  `booking_status` enum('Available','Full') NOT NULL DEFAULT 'Available',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_override` (`chamber_id`,`override_date`),
  KEY `doctor_id` (`doctor_id`),
  CONSTRAINT `chamber_date_overrides_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE,
  CONSTRAINT `chamber_date_overrides_ibfk_2` FOREIGN KEY (`chamber_id`) REFERENCES `doctor_chambers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chamber_date_overrides`
--

LOCK TABLES `chamber_date_overrides` WRITE;
/*!40000 ALTER TABLE `chamber_date_overrides` DISABLE KEYS */;
/*!40000 ALTER TABLE `chamber_date_overrides` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_appointments`
--

DROP TABLE IF EXISTS `doctor_appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_appointments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int NOT NULL,
  `chamber_id` int NOT NULL,
  `patient_name` varchar(150) NOT NULL,
  `patient_phone` varchar(30) NOT NULL,
  `patient_email` varchar(150) DEFAULT NULL,
  `patient_age` int NOT NULL,
  `patient_gender` enum('Male','Female','Other') NOT NULL,
  `patient_problem` text NOT NULL,
  `appointment_date` date NOT NULL,
  `appointment_time` time NOT NULL,
  `reporting_time` time NOT NULL,
  `serial_number` int NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `trx_id` varchar(100) NOT NULL,
  `payment_amount` decimal(10,2) NOT NULL DEFAULT '100.00',
  `status` enum('Pending','Confirmed','Completed','Cancelled') NOT NULL DEFAULT 'Confirmed',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `doctor_id` (`doctor_id`),
  KEY `chamber_id` (`chamber_id`),
  CONSTRAINT `doctor_appointments_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE,
  CONSTRAINT `doctor_appointments_ibfk_2` FOREIGN KEY (`chamber_id`) REFERENCES `doctor_chambers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_appointments`
--

LOCK TABLES `doctor_appointments` WRITE;
/*!40000 ALTER TABLE `doctor_appointments` DISABLE KEYS */;
INSERT INTO `doctor_appointments` VALUES (2,2,2,'sda','sda',NULL,15,'Female','sdad','2026-05-19','16:00:00','15:45:00',1,'Nagad','TRX102045',100.00,'Confirmed','2026-05-18 19:21:42'),(4,1,1,'dasd','asda',NULL,20,'Female','asd','2026-05-20','17:15:00','17:00:00',2,'bKash','TRX916065',100.00,'Confirmed','2026-05-18 19:35:16'),(5,1,1,'fgjh','fdghdfg',NULL,20,'Male','cvbv','2026-05-20','23:30:00','23:15:00',27,'bKash','TRX268008',100.00,'Cancelled','2026-05-18 19:57:48'),(7,1,1,'adasd','sdasd',NULL,30,'Male','sad','2026-05-23','17:00:00','16:45:00',1,'Visa','TRX506843',100.00,'Confirmed','2026-05-21 14:58:26'),(8,1,1,'dasd','adsasd',NULL,30,'Male','asd','2026-05-23','17:30:00','17:15:00',3,'Net Banking (City)','TRX579320',100.00,'Cancelled','2026-05-21 14:59:39'),(9,1,1,'md tanjil','01709965945',NULL,21,'Male','exampale','2026-05-23','17:45:00','17:30:00',4,'bKash','TRX331158',100.00,'Completed','2026-05-22 14:48:51');
/*!40000 ALTER TABLE `doctor_appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_chambers`
--

DROP TABLE IF EXISTS `doctor_chambers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_chambers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int NOT NULL,
  `clinic_name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `visiting_days` varchar(255) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `time_per_patient_min` int NOT NULL DEFAULT '15',
  `max_patients` int NOT NULL DEFAULT '30',
  `booking_status` enum('Available','Full') NOT NULL DEFAULT 'Available',
  PRIMARY KEY (`id`),
  KEY `doctor_id` (`doctor_id`),
  CONSTRAINT `doctor_chambers_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_chambers`
--

LOCK TABLES `doctor_chambers` WRITE;
/*!40000 ALTER TABLE `doctor_chambers` DISABLE KEYS */;
INSERT INTO `doctor_chambers` VALUES (1,1,'Labaid Cardiac Hospital','Dhanmondi, Dhaka','Mon','08:00:00','21:00:00',20,20,'Available'),(2,2,'Square Hospital','Panthapath, Dhaka','Sunday, Tuesday, Thursday','16:00:00','20:00:00',20,30,'Available'),(3,3,'Evercare Hospital','Bashundhara, Dhaka','Monday, Wednesday, Friday','18:00:00','22:00:00',20,30,'Available'),(4,4,'Max Hospital','Mehedibag, Chattogram','Sat, Sun, Mon, Tue','15:00:00','21:00:00',15,30,'Available'),(5,5,'Epic Health Care','Panchlaish, Chattogram','Sun, Tue, Thu','16:00:00','19:00:00',15,30,'Available'),(6,6,'Mount Adora Hospital','Nayasarak, Sylhet','Sat, Mon, Wed','17:00:00','20:30:00',15,30,'Available'),(7,7,'Popular Diagnostic','Laxmipur, Rajshahi','Everyday except Friday','16:00:00','20:00:00',10,30,'Available'),(8,8,'Khulna City Medical','KDA Avenue, Khulna','Mon, Wed, Thu','18:00:00','22:00:00',15,30,'Available'),(9,9,'Rahat Anwar Hospital','Band Road, Barisal','Sat, Tue, Thu','15:00:00','18:00:00',15,30,'Available'),(10,10,'Update Diagnostic','Dhap, Rangpur','Sun, Mon, Wed, Thu','10:00:00','14:00:00',20,30,'Available'),(11,11,'Swadesh Hospital','Charpara, Mymensingh','Sat, Mon, Thu','16:00:00','20:00:00',25,30,'Available'),(12,12,'Moon Hospital','Jhawtola, Comilla','Everyday except Friday','17:00:00','21:00:00',15,30,'Available');
/*!40000 ALTER TABLE `doctor_chambers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_leaves`
--

DROP TABLE IF EXISTS `doctor_leaves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_leaves` (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int NOT NULL,
  `leave_date` date NOT NULL,
  `reason` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_leave` (`doctor_id`,`leave_date`),
  CONSTRAINT `doctor_leaves_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_leaves`
--

LOCK TABLES `doctor_leaves` WRITE;
/*!40000 ALTER TABLE `doctor_leaves` DISABLE KEYS */;
/*!40000 ALTER TABLE `doctor_leaves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone` varchar(30) NOT NULL,
  `district` varchar(100) NOT NULL,
  `specialties` varchar(255) NOT NULL,
  `treated_diseases` text,
  `designation` varchar(255) DEFAULT NULL,
  `experience_years` int DEFAULT NULL,
  `fee` decimal(10,2) NOT NULL DEFAULT '100.00',
  `username` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (1,'Dr. A.K.M. Fazlul Hoque','dr.fazlul@test.com','01700000000','Dhaka','Cardiology','asdsad ,asdasda','Professor',20,1000.00,'dr.fazlul','password123','Active','2026-05-18 19:06:28'),(2,'Dr. Shahina Begum','dr.shahina@test.com','01700000000','Dhaka','Gynaecology',NULL,'Associate Professor',15,800.00,'dr.shahina','password123','Active','2026-05-18 19:06:28'),(3,'Dr. MD. Tareq Rahman','dr.tareq@test.com','01700000000','Dhaka','Neurology',NULL,'Consultant',12,1200.00,'dr.tareq','password123','Active','2026-05-18 19:06:28'),(4,'Dr. Saifur Rahman','dr.saifur@test.com','01700000000','Chattogram','Medicine',NULL,'Professor',25,800.00,'dr.saifur','password123','Active','2026-05-18 19:06:28'),(5,'Dr. Nazma Chowdhury','dr.nazma@test.com','01700000000','Chattogram','Pediatrics',NULL,'Consultant',10,600.00,'dr.nazma','password123','Active','2026-05-18 19:06:28'),(6,'Dr. Iqbal Hussain','dr.iqbal@test.com','01700000000','Sylhet','Orthopedics',NULL,'Associate Professor',18,700.00,'dr.iqbal','password123','Active','2026-05-18 19:06:28'),(7,'Dr. Farhana Yasmin','dr.farhana@test.com','01700000000','Rajshahi','Dermatology',NULL,'Consultant',8,500.00,'dr.farhana','password123','Active','2026-05-18 19:06:28'),(8,'Dr. Asaduzzaman','dr.asad@test.com','01700000000','Khulna','Medicine',NULL,'Professor',30,600.00,'dr.asad','password123','Active','2026-05-18 19:06:28'),(9,'Dr. Rafiqul Islam','dr.rafiqul@test.com','01700000000','Barisal','ENT',NULL,'Assistant Professor',12,600.00,'dr.rafiqul','password123','Active','2026-05-18 19:06:28'),(10,'Dr. Tanjila Akter','dr.tanjila@test.com','01700000000','Rangpur','Gynaecology',NULL,'Consultant',9,500.00,'dr.tanjila','password123','Active','2026-05-18 19:06:28'),(11,'Dr. Kamrul Hasan','dr.kamrul@test.com','01700000000','Mymensingh','Psychiatry',NULL,'Associate Professor',15,700.00,'dr.kamrul','password123','Active','2026-05-18 19:06:28'),(12,'Dr. Mahbubul Alam','dr.mahbub@test.com','01700000000','Comilla','Cardiology',NULL,'Consultant',14,800.00,'dr.mahbub','password123','Active','2026-05-18 19:06:28');
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donor_requests`
--

DROP TABLE IF EXISTS `donor_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donor_requests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `request_id` int NOT NULL,
  `donor_id` int NOT NULL,
  `status` enum('Pending','Accepted','Rejected') NOT NULL DEFAULT 'Pending',
  `notify_order` int DEFAULT NULL,
  `distance_km` decimal(8,2) DEFAULT NULL,
  `notified_at` timestamp NULL DEFAULT NULL,
  `responded_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `request_id` (`request_id`),
  KEY `donor_id` (`donor_id`),
  CONSTRAINT `donor_requests_ibfk_1` FOREIGN KEY (`request_id`) REFERENCES `blood_requests` (`id`) ON DELETE CASCADE,
  CONSTRAINT `donor_requests_ibfk_2` FOREIGN KEY (`donor_id`) REFERENCES `donors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donor_requests`
--

LOCK TABLES `donor_requests` WRITE;
/*!40000 ALTER TABLE `donor_requests` DISABLE KEYS */;
INSERT INTO `donor_requests` VALUES (1,1,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-10 17:19:03'),(4,4,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-10 18:22:31'),(5,5,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-12 09:00:38'),(6,6,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-12 09:06:53'),(7,7,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-12 09:13:27'),(8,8,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-12 12:06:15'),(9,9,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-12 15:53:54'),(10,10,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-12 15:55:06'),(11,11,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-12 15:55:47'),(12,12,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-12 16:02:26'),(13,13,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-12 16:21:23'),(14,14,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-12 16:38:42'),(20,20,6,'Pending',NULL,NULL,NULL,NULL,'2026-05-12 17:21:04'),(22,22,7,'Pending',NULL,NULL,NULL,NULL,'2026-05-13 16:52:40'),(23,23,6,'Rejected',1,94.22,'2026-05-16 19:04:06','2026-05-16 19:07:48','2026-05-16 19:04:06'),(24,24,6,'Rejected',1,94.22,'2026-05-16 19:05:47','2026-05-16 19:07:55','2026-05-16 19:05:47'),(25,25,6,'Pending',1,94.22,'2026-05-16 19:15:56',NULL,'2026-05-16 19:15:56'),(26,26,6,'Pending',1,94.22,'2026-05-16 19:21:13',NULL,'2026-05-16 19:21:13'),(27,27,6,'Pending',1,0.50,'2026-05-16 19:33:15',NULL,'2026-05-16 19:33:15'),(28,28,6,'Pending',1,31.44,'2026-05-16 20:07:54',NULL,'2026-05-16 20:07:54'),(29,29,6,'Pending',1,1.61,'2026-05-16 20:19:58',NULL,'2026-05-16 20:19:58'),(30,30,6,'Pending',1,94.22,'2026-05-17 15:23:13',NULL,'2026-05-17 15:23:13'),(31,31,6,'Pending',1,2.21,'2026-05-17 17:13:03',NULL,'2026-05-17 17:13:03'),(33,33,35,'Pending',1,21.65,'2026-05-17 17:59:04',NULL,'2026-05-17 17:59:04'),(34,33,36,'Pending',2,30.13,'2026-05-17 18:04:05',NULL,'2026-05-17 17:59:04'),(35,34,6,'Pending',1,2.21,'2026-05-17 18:25:03',NULL,'2026-05-17 18:25:03'),(36,35,37,'Pending',1,0.79,'2026-05-17 18:27:06',NULL,'2026-05-17 18:27:06'),(37,35,38,'Pending',2,10.01,NULL,NULL,'2026-05-17 18:27:06'),(38,36,6,'Pending',1,30.97,'2026-05-20 18:12:45',NULL,'2026-05-20 18:12:45'),(39,37,7,'Pending',1,0.37,'2026-05-20 18:13:27',NULL,'2026-05-20 18:13:27'),(40,38,36,'Pending',1,4.97,'2026-05-21 15:09:43',NULL,'2026-05-21 15:09:43'),(41,38,35,'Pending',2,8.02,NULL,NULL,'2026-05-21 15:09:43'),(42,38,51,'Pending',3,8.02,NULL,NULL,'2026-05-21 15:09:43'),(43,39,6,'Pending',1,2.20,'2026-05-22 14:34:59',NULL,'2026-05-22 14:34:59'),(44,40,6,'Pending',1,2.49,'2026-05-22 14:42:48',NULL,'2026-05-22 14:42:48'),(45,41,35,'Pending',1,6.13,'2026-05-30 19:29:13',NULL,'2026-05-30 19:29:13'),(46,41,51,'Pending',2,6.13,NULL,NULL,'2026-05-30 19:29:13'),(47,41,36,'Pending',3,13.68,NULL,NULL,'2026-05-30 19:29:13');
/*!40000 ALTER TABLE `donor_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donors`
--

DROP TABLE IF EXISTS `donors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `blood_group` varchar(10) NOT NULL,
  `location` varchar(100) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latitude` decimal(10,7) DEFAULT NULL,
  `longitude` decimal(10,7) DEFAULT NULL,
  `phone` varchar(20) NOT NULL,
  `profession` varchar(120) DEFAULT NULL,
  `donation_count` int NOT NULL DEFAULT '0',
  `last_donation_date` date DEFAULT NULL,
  `age` int DEFAULT NULL,
  `health_notes` text,
  `status` enum('Available','Busy','Suspended') DEFAULT 'Available',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fcm_token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donors`
--

LOCK TABLES `donors` WRITE;
/*!40000 ALTER TABLE `donors` DISABLE KEYS */;
INSERT INTO `donors` VALUES (1,'Tanjil',NULL,'O+','Khulna',NULL,NULL,NULL,'01893558863',NULL,0,NULL,NULL,NULL,'Busy','2026-04-27 13:48:51',NULL,NULL,NULL),(2,'Nadim',NULL,'B+','Barishal',NULL,NULL,NULL,'019XXXXXXXX',NULL,0,NULL,NULL,NULL,'Available','2026-04-27 13:48:51',NULL,NULL,NULL),(3,'Tamim','tamin@gmail.com','O+','Manual map selection','Manual map selection',22.6788071,90.3456402,'018XXXXXXXX','sdasda',0,'2026-05-17',20,'asdas','Available','2026-04-27 13:48:51','11','11',NULL),(4,'Mahadi Hasan',NULL,'A+','Khulna',NULL,NULL,NULL,'01600000000',NULL,0,NULL,NULL,NULL,NULL,'2026-04-27 14:40:58',NULL,NULL,NULL),(5,'Nadim Fakir',NULL,'B+','Khulna',NULL,NULL,NULL,'01900000000',NULL,0,NULL,NULL,NULL,'Available','2026-04-27 14:58:11','nadim_f','password123',NULL),(6,'aaa','ex@gmail.com','A+','Barishal Sadar, Barishal','Current location',22.7100000,90.3500000,'01893558863','asdasd',2,'2026-05-27',20,'sadas','Busy','2026-05-04 14:22:12','ex@gmail.com','1234','fRMqfi7jTW6HZ2Y-luE1xg:APA91bEl7nHjgEvwKZjPKvOwovXvZY5fhcodcA97BqHinF0SZaHEVhh56CuzwdiQF8b3qUtL5blh4DzWBuLqnjvke7x5acYGFzjwbqUR2uhIk0uwedmSVjc'),(7,'mahadi','mahadi@gmail.com','A+','Bhola Sadar, Bhola','Manual map selection',22.6851877,90.6437301,'01700000000','student',5,'2026-05-13',24,'HIV','Available','2026-05-13 16:13:13','mahadi@gmail.com','1234','fRMqfi7jTW6HZ2Y-luE1xg:APA91bEl7nHjgEvwKZjPKvOwovXvZY5fhcodcA97BqHinF0SZaHEVhh56CuzwdiQF8b3qUtL5blh4DzWBuLqnjvke7x5acYGFzjwbqUR2uhIk0uwedmSVjc'),(8,'test','test@gmail.com','A+','Manual map selection','Manual map selection',22.7192695,90.3434086,'01893558863','asdas',0,'2026-05-17',21,'sadad','Available','2026-05-16 20:18:34','a@gmail.com','111111',NULL),(35,'রহিম টেস্ট A+ (১)','rahim1@testlifeline.bd','A+','Dhanmondi, Dhaka','Road 27, Dhanmondi, Dhaka',23.7465000,90.3757000,'01911001001','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.aplus1','test1234',NULL),(36,'করিম টেস্ট A+ (২)','karim1@testlifeline.bd','A+','Mirpur, Dhaka','Mirpur-10, Dhaka',23.8223000,90.3654000,'01911001002','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.aplus2','test1234',NULL),(37,'রনি টেস্ট B+ (১)','roni1@testlifeline.bd','B+','Gulshan, Dhaka','Gulshan-2, Dhaka',23.7925000,90.4078000,'01911002001','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.bplus1','test1234',NULL),(38,'মনি টেস্ট B+ (২)','moni1@testlifeline.bd','B+','Uttara, Dhaka','Uttara Sector-11, Dhaka',23.8759000,90.3795000,'01911002002','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.bplus2','test1234',NULL),(39,'সুমি টেস্ট O+ (১)','sumi1@testlifeline.bd','O+','Badda, Dhaka','Badda Main Road, Dhaka',23.7819000,90.4290000,'01911003001','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.oplus1','test1234',NULL),(40,'রুমি টেস্ট O+ (২)','rumi1@testlifeline.bd','O+','Mohammadpur, Dhaka','Mohammadpur, Dhaka',23.7630000,90.3563000,'01911003002','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.oplus2','test1234',NULL),(41,'তনি টেস্ট AB+ (১)','toni1@testlifeline.bd','AB+','Tejgaon, Dhaka','Tejgaon Industrial Area, Dhaka',23.7750000,90.3930000,'01911004001','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.abplus1','test1234',NULL),(42,'বনি টেস্ট AB+ (২)','boni1@testlifeline.bd','AB+','Khilgaon, Dhaka','Khilgaon Circle, Dhaka',23.7478000,90.4290000,'01911004002','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.abplus2','test1234',NULL),(43,'লিনা টেস্ট A- (১)','lina1@testlifeline.bd','A-','Jatrabari, Dhaka','Jatrabari, Dhaka',23.7105000,90.4278000,'01911005001','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.aminus1','test1234',NULL),(44,'দিনা টেস্ট A- (২)','dina1@testlifeline.bd','A-','Demra, Dhaka','Demra Bazar, Dhaka',23.7148000,90.4618000,'01911005002','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.aminus2','test1234',NULL),(45,'মিনা টেস্ট B- (১)','mina1@testlifeline.bd','B-','Rayer Bazar, Dhaka','Rayer Bazar, Dhaka',23.7392000,90.3580000,'01911006001','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.bminus1','test1234',NULL),(46,'টিনা টেস্ট B- (২)','tina1@testlifeline.bd','B-','Lalbagh, Dhaka','Lalbagh Fort Area, Dhaka',23.7204000,90.3876000,'01911006002','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.bminus2','test1234',NULL),(47,'নাবিল টেস্ট O- (১)','nabil1@testlifeline.bd','O-','Wari, Dhaka','Wari, Old Dhaka',23.7193000,90.4098000,'01911007001','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.ominus1','test1234',NULL),(48,'সাবির টেস্ট O- (২)','sabir1@testlifeline.bd','O-','Sutrapur, Dhaka','Sutrapur, Old Dhaka',23.7089000,90.4035000,'01911007002','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.ominus2','test1234',NULL),(49,'হাসনা টেস্ট AB- (১)','hasna1@testlifeline.bd','AB-','Kamrangirchar, Dhaka','Kamrangirchar, Dhaka',23.7046000,90.3745000,'01911008001','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.abminus1','test1234',NULL),(50,'রাসনা টেস্ট AB- (২)','rasna1@testlifeline.bd','AB-','Keraniganj, Dhaka','Keraniganj, Dhaka',23.6939000,90.3705000,'01911008002','Test Donor',0,NULL,25,NULL,'Available','2026-05-17 17:58:09','test.abminus2','test1234',NULL),(51,'Rahim Test Donor','rahim.test@lifeline.bd','A+','Dhanmondi, Dhaka','Road 27, Dhanmondi',23.7465000,90.3757000,'01711000001','Student',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','rahim.test','test1234',NULL),(52,'Karim Test Donor','karim.test@lifeline.bd','B+','Mirpur, Dhaka','Mirpur-10',23.8223000,90.3654000,'01711000002','Service',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','karim.test','test1234',NULL),(53,'Runa Test Donor','runa.test@lifeline.bd','O+','Uttara, Dhaka','Uttara Sector-11',23.8759000,90.3795000,'01711000003','Teacher',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','runa.test','test1234',NULL),(54,'Mina Test Donor','mina.test@lifeline.bd','AB+','Gulshan, Dhaka','Gulshan-2',23.7925000,90.4078000,'01711000004','Engineer',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','mina.test','test1234',NULL),(55,'Salam Test Donor','salam.test@lifeline.bd','A-','Mohammadpur, Dhaka','Mohammadpur Bus Stand',23.7630000,90.3563000,'01711000005','Business',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','salam.test','test1234',NULL),(56,'Nusrat Test Donor','nusrat.test@lifeline.bd','B-','Badda, Dhaka','Badda Main Road',23.7819000,90.4290000,'01711000006','Doctor',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','nusrat.test','test1234',NULL),(57,'Farhan Test Donor','farhan.test@lifeline.bd','O-','Demra, Dhaka','Demra Bazar',23.7148000,90.4618000,'01711000007','Banker',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','farhan.test','test1234',NULL),(58,'Sumaiya Test Donor','sumaiya.test@lifeline.bd','AB-','Khilgaon, Dhaka','Khilgaon Circle',23.7478000,90.4290000,'01711000008','Nurse',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','sumaiya.test','test1234',NULL),(59,'Jamal Chittagong','jamal.ctg@lifeline.bd','A+','Chittagong City, Chittagong','Agrabad, Chittagong',22.3282000,91.8222000,'01811000001','Service',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','jamal.ctg','test1234',NULL),(60,'Rohima Chittagong','rohima.ctg@lifeline.bd','B+','Hathazari, Chittagong','Hathazari Upazila',22.5000000,91.8333000,'01811000002','Teacher',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','rohima.ctg','test1234',NULL),(61,'Kabir Sylhet','kabir.syl@lifeline.bd','O+','Sylhet Sadar, Sylhet','Zindabazar, Sylhet',24.8949000,91.8687000,'01911000001','Business',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','kabir.syl','test1234',NULL),(62,'Poli Sylhet','poli.syl@lifeline.bd','AB+','Sylhet Sadar, Sylhet','Amberkhana, Sylhet',24.9000000,91.8650000,'01911000002','Student',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','poli.syl','test1234',NULL),(63,'Amir Rajshahi','amir.raj@lifeline.bd','A+','Rajshahi City, Rajshahi','Shaheb Bazar, Rajshahi',24.3636000,88.6241000,'01611000001','Farmer',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','amir.raj','test1234',NULL),(64,'Lima Rajshahi','lima.raj@lifeline.bd','B+','Paba, Rajshahi','Paba Upazila',24.3800000,88.6500000,'01611000002','Housewife',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','lima.raj','test1234',NULL),(65,'Hasib Khulna','hasib.khl@lifeline.bd','O+','Khulna City, Khulna','Boyra, Khulna',22.8456000,89.5403000,'01511000001','Engineer',0,NULL,25,NULL,'Available','2026-05-18 11:43:04','hasib.khl','test1234',NULL);
/*!40000 ALTER TABLE `donors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospitals`
--

DROP TABLE IF EXISTS `hospitals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospitals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `location` varchar(100) NOT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latitude` decimal(10,7) DEFAULT NULL,
  `longitude` decimal(10,7) DEFAULT NULL,
  `contact_person` varchar(150) DEFAULT NULL,
  `license_number` varchar(120) DEFAULT NULL,
  `api_key` varchar(64) DEFAULT NULL,
  `icu_available` int DEFAULT '0',
  `emergency_bed_available` int DEFAULT '0',
  `last_updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` enum('Active','Suspended') DEFAULT 'Active',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `api_key` (`api_key`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospitals`
--

LOCK TABLES `hospitals` WRITE;
/*!40000 ALTER TABLE `hospitals` DISABLE KEYS */;
INSERT INTO `hospitals` VALUES (1,'Khulna Medical College',NULL,'Khulna',NULL,NULL,NULL,NULL,NULL,NULL,NULL,5,12,'2026-04-27 13:48:51',NULL,NULL,'Active'),(2,'Sher-e-Bangla Medical',NULL,'Barishal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,8,'2026-04-27 13:48:51',NULL,NULL,'Active'),(3,'Khulna City Hospital1',NULL,'Khulna',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,'2026-04-27 14:56:32','city_khulna','city123','Active'),(4,'ex',NULL,'barishal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,20,'2026-04-29 17:13:25','ex','ex','Active'),(5,'ঢাকা মেডিকেল কলেজ হাসপাতাল','dmch.test@lifeline.bd','Ramna, Dhaka','01711112233','Bakhshibazar, Ramna, Dhaka',23.7259000,90.3972000,'Director (DMCH)','LIC-DMCH-7788','ll_live_4601213aa816996adb0adb9e57f793d9e52e20460d71cc3b',8,24,'2026-05-18 11:42:58','dmch.test','test1234','Active'),(6,'স্কয়ার হাসপাতাল','square.test@lifeline.bd','Dhanmondi, Dhaka','01711223344','18/F Bir Uttam Qazi Nuruzzaman Sarak, Dhaka',23.7516000,90.3814000,'Dr. Rafiq (HR)','LIC-SQH-9922','ll_live_5540f2aceb284764a0ecfa2d867145b5499a283486cbe900',15,30,'2026-05-18 11:42:58','square.test','test1234','Active'),(7,'এভারকেয়ার হাসপাতাল ঢাকা','evercare.test@lifeline.bd','Gulshan, Dhaka','01711334455','Plot 81, Block E, Bashundhara R/A, Dhaka',23.8122000,90.4302000,'Admin Lead','LIC-EVH-3344','ll_live_74eab25456c661f4eb7dfb65362cfee0f475c6f2ae144a21',20,45,'2026-05-18 11:42:58','evercare.test','test1234','Active'),(8,'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল','cmch.test@lifeline.bd','Chittagong City, Chittagong','01811223344','K.B. Fazlul Kader Road, Chittagong',22.3592000,91.8291000,'Director (CMCH)','LIC-CMCH-4455','ll_live_02e621c6d74705b3c366a73187b8ed171cf09bd93bd08c2c',6,18,'2026-05-18 11:42:58','cmch.test','test1234','Active'),(9,'মেট্রোপলিটন হাসপাতাল চট্টগ্রাম','metro.ctg@lifeline.bd','Chittagong City, Chittagong','01811556677','East Nasirabad, Chittagong',22.3638000,91.8219000,'Superintendent','LIC-MHC-8877','ll_live_36f8a56cae24236d0ebc5768f53f3b83343331a167ed2666',4,12,'2026-05-18 11:42:58','metro.ctg','test1234','Active'),(10,'সিলেট এম এ জি ওসমানী মেডিকেল কলেজ','magmc.test@lifeline.bd','Sylhet Sadar, Sylhet','01911223344','Kajirbazar, Sylhet',24.8986000,91.8594000,'Emergency Lead','LIC-MAGMC-5566','ll_live_22f37dc4958cdbe61e94733a896c955ed5d8830f34515c6c',5,20,'2026-05-18 11:42:58','magmc.test','test1234','Active'),(11,'রাজশাহী মেডিকেল কলেজ হাসপাতাল','rmch.test@lifeline.bd','Rajshahi City, Rajshahi','01611223344','Rajnagar, Rajshahi',24.3688000,88.5866000,'Director (RMCH)','LIC-RMCH-1122','ll_live_589cc88e2a766e53bdcfbbc138385a7f7b646441cafbaef6',7,15,'2026-05-18 11:42:58','rmch.test','test1234','Active'),(12,'খুলনা মেডিকেল কলেজ হাসপাতাল','kmch.test@lifeline.bd','Khulna City, Khulna','01511223344','Boyra, Khulna',22.8415000,89.5441000,'Director (KMCH)','LIC-KMCH-3322','ll_live_b0dbf274b5e7121e0354337c5590a59dc60508b9c69d99aa',6,16,'2026-05-18 11:42:58','kmch.test','test1234','Active'),(14,'ex','exh@gmail.com','Barisal','017000000','Barisal, Barisal, Bangladesh',22.7068530,90.3611026,'000','0000',NULL,0,0,'2026-05-22 15:11:21','ex1','1234','Active');
/*!40000 ALTER TABLE `hospitals` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-31  1:36:37
