CREATE DATABASE  IF NOT EXISTS `onlineshoppingdb_sent26` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `onlineshoppingdb_sent26`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: onlineshoppingdb_sent26
-- ------------------------------------------------------
-- Server version	5.5.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authorities`
--

DROP TABLE IF EXISTS `authorities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authorities` (
  `username` varchar(50) NOT NULL,
  `authority` varchar(50) NOT NULL,
  UNIQUE KEY `authorities_idx_1` (`username`,`authority`),
  CONSTRAINT `authorities_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authorities`
--

LOCK TABLES `authorities` WRITE;
/*!40000 ALTER TABLE `authorities` DISABLE KEYS */;
INSERT INTO `authorities` VALUES ('amin','ROLE_ADMIN'),('yusuf','ROLE_ADMIN');
/*!40000 ALTER TABLE `authorities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (4,'atlar'),(6,'heyvanlar'),(8,'masinlar1');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (11,'Bakı'),(12,'Gəncə'),(13,'Ağdam'),(14,'Naftalan'),(15,'Sumqayıt'),(16,'Xırdalan'),(17,'Şəki'),(18,'Lənkəran'),(19,'Şamaxı'),(20,'Quba'),(21,'Dehli');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `register` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `price` decimal(10,2) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `image` varchar(145) DEFAULT NULL,
  `description` text,
  `is_new` bit(1) DEFAULT NULL,
  `owner_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'hp',NULL,4.00,4,12,'1eca2c64-4dd2-4e3c-bbf7-9e7b1e2dc074.jpg','mezmun','\0','sahib','yusif.alizada@developia.az','055-555-9999',1),(2,'dell',NULL,534.00,6,12,'0ff61977-49a4-4bfc-a79f-10e5e2bc4c09.png','rtert','\0','53453','yusif.alizada@developia.az','055-555-9999',1),(3,'acer','2019-12-24 08:00:00',64.00,6,12,'861186f5-ee97-437d-b4fa-be7c21779458.jpg','yuyt','\0','6456','yusif.alizada@developia.az','055-555-9999',1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `enabled` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'yusuf','1',''),(2,'amin','2','');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_grant`
--

DROP TABLE IF EXISTS `user_grant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_grant` (
  `user_id` int(11) NOT NULL,
  `grant_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`grant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='bu cedvelde istifadecilerin her birine hansi huquqlarin verildiyini siyahisi olacaq';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_grant`
--

LOCK TABLES `user_grant` WRITE;
/*!40000 ALTER TABLE `user_grant` DISABLE KEYS */;
INSERT INTO `user_grant` VALUES (1,1),(2,2);
/*!40000 ALTER TABLE `user_grant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_grant_list`
--

DROP TABLE IF EXISTS `user_grant_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_grant_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='burada istifadecilerin huquqlarinin siyahisi olacaq';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_grant_list`
--

LOCK TABLES `user_grant_list` WRITE;
/*!40000 ALTER TABLE `user_grant_list` DISABLE KEYS */;
INSERT INTO `user_grant_list` VALUES (1,'seller_page','Satıcı səhifəsi'),(2,'admin_page','Admin səhifəsi');
/*!40000 ALTER TABLE `user_grant_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(150) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('amin','{noop}5678',1),('yusuf','{noop}1234',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-11  7:28:42
