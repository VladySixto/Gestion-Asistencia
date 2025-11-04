-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: bdext
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos` (
  `idAlumno` int NOT NULL,
  `estado_academico` enum('Activo','Inactivo','Egresado','Suspendido') DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `genero` enum('Masculino','Femenino','Otro','No especifica') DEFAULT NULL,
  PRIMARY KEY (`idAlumno`),
  CONSTRAINT `fk_Alumnos_Usuarios1` FOREIGN KEY (`idAlumno`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calificaciones`
--

DROP TABLE IF EXISTS `calificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calificaciones` (
  `idCalificacion` int NOT NULL AUTO_INCREMENT,
  `idAlumno` int NOT NULL,
  `idMateria` int NOT NULL,
  PRIMARY KEY (`idCalificacion`),
  KEY `fk_Calificaciones_Alumnos1_idx` (`idAlumno`),
  KEY `fk_Calificaciones_Materias1_idx` (`idMateria`),
  CONSTRAINT `fk_Calificaciones_Alumnos1` FOREIGN KEY (`idAlumno`) REFERENCES `alumnos` (`idAlumno`),
  CONSTRAINT `fk_Calificaciones_Materias1` FOREIGN KEY (`idMateria`) REFERENCES `materias` (`idMateria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calificaciones`
--

LOCK TABLES `calificaciones` WRITE;
/*!40000 ALTER TABLE `calificaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `calificaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carreras`
--

DROP TABLE IF EXISTS `carreras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carreras` (
  `idCarrera` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text,
  `duracion_anios` int DEFAULT NULL,
  `plan_academico_act` varchar(100) DEFAULT NULL,
  `Sedes_idSede` int NOT NULL,
  `Tipo_Carrera_idTipo_Carrera` int NOT NULL,
  `activa_inscripciones` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idCarrera`),
  KEY `fk_Carreras_Sedes1_idx` (`Sedes_idSede`),
  KEY `fk_Carreras_Tipo_Carrera1_idx` (`Tipo_Carrera_idTipo_Carrera`),
  CONSTRAINT `fk_Carreras_Sedes1` FOREIGN KEY (`Sedes_idSede`) REFERENCES `sedes` (`idSede`),
  CONSTRAINT `fk_Carreras_Tipo_Carrera1` FOREIGN KEY (`Tipo_Carrera_idTipo_Carrera`) REFERENCES `tipo_carrera` (`idTipo_Carrera`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carreras`
--

LOCK TABLES `carreras` WRITE;
/*!40000 ALTER TABLE `carreras` DISABLE KEYS */;
/*!40000 ALTER TABLE `carreras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carreras_has_sub_categoria_carrera`
--

DROP TABLE IF EXISTS `carreras_has_sub_categoria_carrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carreras_has_sub_categoria_carrera` (
  `Carreras_idCarrera` int NOT NULL,
  `sub_categoria_carrera_idsub_categoria_carrera` int NOT NULL,
  PRIMARY KEY (`Carreras_idCarrera`,`sub_categoria_carrera_idsub_categoria_carrera`),
  KEY `fk_Carreras_has_sub_categoria_carrera_sub_categoria_carrera1_idx` (`sub_categoria_carrera_idsub_categoria_carrera`),
  CONSTRAINT `fk_Carreras_has_sub_categoria_carrera_Carreras1` FOREIGN KEY (`Carreras_idCarrera`) REFERENCES `carreras` (`idCarrera`),
  CONSTRAINT `fk_Carreras_has_sub_categoria_carrera_sub_categoria_carrera1` FOREIGN KEY (`sub_categoria_carrera_idsub_categoria_carrera`) REFERENCES `sub_categoria_carrera` (`idsub_categoria_carrera`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carreras_has_sub_categoria_carrera`
--

LOCK TABLES `carreras_has_sub_categoria_carrera` WRITE;
/*!40000 ALTER TABLE `carreras_has_sub_categoria_carrera` DISABLE KEYS */;
/*!40000 ALTER TABLE `carreras_has_sub_categoria_carrera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `correlativas`
--

DROP TABLE IF EXISTS `correlativas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `correlativas` (
  `idCorrelativa` int NOT NULL AUTO_INCREMENT,
  `Materias_idMateria_necesaria` int NOT NULL,
  `Materias_idMateria_cursar` int NOT NULL,
  PRIMARY KEY (`idCorrelativa`),
  KEY `fk_Correlativas_Materias1_idx` (`Materias_idMateria_necesaria`),
  KEY `fk_Correlativas_Materias2_idx` (`Materias_idMateria_cursar`),
  CONSTRAINT `fk_Correlativas_Materia_Cursar` FOREIGN KEY (`Materias_idMateria_cursar`) REFERENCES `materias` (`idMateria`),
  CONSTRAINT `fk_Correlativas_Materia_Necesaria` FOREIGN KEY (`Materias_idMateria_necesaria`) REFERENCES `materias` (`idMateria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `correlativas`
--

LOCK TABLES `correlativas` WRITE;
/*!40000 ALTER TABLE `correlativas` DISABLE KEYS */;
/*!40000 ALTER TABLE `correlativas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `directivos`
--

DROP TABLE IF EXISTS `directivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `directivos` (
  `idDirectivo` int NOT NULL,
  PRIMARY KEY (`idDirectivo`),
  CONSTRAINT `fk_Directivos_Usuarios1` FOREIGN KEY (`idDirectivo`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `directivos`
--

LOCK TABLES `directivos` WRITE;
/*!40000 ALTER TABLE `directivos` DISABLE KEYS */;
/*!40000 ALTER TABLE `directivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluaciones`
--

DROP TABLE IF EXISTS `evaluaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluaciones` (
  `idEvaluacion` int NOT NULL AUTO_INCREMENT,
  `idCalificacion` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `valor` decimal(4,2) DEFAULT NULL,
  PRIMARY KEY (`idEvaluacion`),
  KEY `fk_Evaluaciones_Calificaciones1_idx` (`idCalificacion`),
  CONSTRAINT `fk_Evaluaciones_Calificaciones1` FOREIGN KEY (`idCalificacion`) REFERENCES `calificaciones` (`idCalificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluaciones`
--

LOCK TABLES `evaluaciones` WRITE;
/*!40000 ALTER TABLE `evaluaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `finales`
--

DROP TABLE IF EXISTS `finales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `finales` (
  `idFinal` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idFinal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `finales`
--

LOCK TABLES `finales` WRITE;
/*!40000 ALTER TABLE `finales` DISABLE KEYS */;
/*!40000 ALTER TABLE `finales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `finales_has_materias`
--

DROP TABLE IF EXISTS `finales_has_materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `finales_has_materias` (
  `Finales_idFinal` int NOT NULL,
  `Materias_idMateria` int NOT NULL,
  PRIMARY KEY (`Finales_idFinal`,`Materias_idMateria`),
  KEY `fk_Finales_has_Materias_Materias1_idx` (`Materias_idMateria`),
  CONSTRAINT `fk_Finales_has_Materias_Finales1` FOREIGN KEY (`Finales_idFinal`) REFERENCES `finales` (`idFinal`),
  CONSTRAINT `fk_Finales_has_Materias_Materias1` FOREIGN KEY (`Materias_idMateria`) REFERENCES `materias` (`idMateria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `finales_has_materias`
--

LOCK TABLES `finales_has_materias` WRITE;
/*!40000 ALTER TABLE `finales_has_materias` DISABLE KEYS */;
/*!40000 ALTER TABLE `finales_has_materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inscripciones_materias`
--

DROP TABLE IF EXISTS `inscripciones_materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inscripciones_materias` (
  `idInscripcion_Materia` int NOT NULL AUTO_INCREMENT,
  `Alumnos_idAlumno` int NOT NULL,
  `Materias_idMateria` int NOT NULL,
  `tipo_estado_materia_alumno_idtipo_estado_materia_alumno` int NOT NULL,
  `estado_verificacion` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idInscripcion_Materia`),
  KEY `fk_Inscripciones_Materias_Alumnos1_idx` (`Alumnos_idAlumno`),
  KEY `fk_Inscripciones_Materias_Materias1_idx` (`Materias_idMateria`),
  KEY `fk_Inscripciones_Materias_Tipo_Estado_Materia_Alumno1_idx` (`tipo_estado_materia_alumno_idtipo_estado_materia_alumno`),
  CONSTRAINT `fk_Inscripciones_Materias_Alumnos1` FOREIGN KEY (`Alumnos_idAlumno`) REFERENCES `alumnos` (`idAlumno`),
  CONSTRAINT `fk_Inscripciones_Materias_Materias1` FOREIGN KEY (`Materias_idMateria`) REFERENCES `materias` (`idMateria`),
  CONSTRAINT `fk_Inscripciones_Materias_Tipo_Estado_Materia_Alumno1` FOREIGN KEY (`tipo_estado_materia_alumno_idtipo_estado_materia_alumno`) REFERENCES `tipo_estado_materia_alumno` (`idtipo_Estado_Materia_Alumno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inscripciones_materias`
--

LOCK TABLES `inscripciones_materias` WRITE;
/*!40000 ALTER TABLE `inscripciones_materias` DISABLE KEYS */;
/*!40000 ALTER TABLE `inscripciones_materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias`
--

DROP TABLE IF EXISTS `materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materias` (
  `idMateria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text,
  `anio_correspondiente` int DEFAULT NULL,
  `idProfesor_dicta` int NOT NULL,
  `idProfesor_suplente` int DEFAULT NULL,
  `Tipo_Materia_idTipo_Materia` int NOT NULL,
  `Carreras_idCarrera` int NOT NULL,
  `max_inasistencias` int DEFAULT NULL,
  PRIMARY KEY (`idMateria`),
  KEY `fk_Materias_Profesores1_idx` (`idProfesor_dicta`),
  KEY `fk_Materias_Profesores2_idx` (`idProfesor_suplente`),
  KEY `fk_Materias_Tipo_Materia1_idx` (`Tipo_Materia_idTipo_Materia`),
  KEY `fk_Materias_Carreras1_idx` (`Carreras_idCarrera`),
  CONSTRAINT `fk_Materias_Carreras1` FOREIGN KEY (`Carreras_idCarrera`) REFERENCES `carreras` (`idCarrera`),
  CONSTRAINT `fk_Materias_Profesor_Dicta` FOREIGN KEY (`idProfesor_dicta`) REFERENCES `profesores` (`idProfesor`),
  CONSTRAINT `fk_Materias_Profesor_Suplente` FOREIGN KEY (`idProfesor_suplente`) REFERENCES `profesores` (`idProfesor`),
  CONSTRAINT `fk_Materias_Tipo_Materia1` FOREIGN KEY (`Tipo_Materia_idTipo_Materia`) REFERENCES `tipo_materia` (`idTipo_Materia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias`
--

LOCK TABLES `materias` WRITE;
/*!40000 ALTER TABLE `materias` DISABLE KEYS */;
/*!40000 ALTER TABLE `materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias_has_modalidad_cursada`
--

DROP TABLE IF EXISTS `materias_has_modalidad_cursada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materias_has_modalidad_cursada` (
  `Materias_idMateria` int NOT NULL,
  `Modalidad_Cursada_idModalidad_Cursada` int NOT NULL,
  PRIMARY KEY (`Materias_idMateria`,`Modalidad_Cursada_idModalidad_Cursada`),
  KEY `fk_Materias_has_Modalidad_Cursada_Modalidad_Cursada1_idx` (`Modalidad_Cursada_idModalidad_Cursada`),
  CONSTRAINT `fk_Materia_has_Modalidad_Materia` FOREIGN KEY (`Materias_idMateria`) REFERENCES `materias` (`idMateria`),
  CONSTRAINT `fk_Materia_has_Modalidad_Modalidad` FOREIGN KEY (`Modalidad_Cursada_idModalidad_Cursada`) REFERENCES `modalidad_cursada` (`idModalidad_Cursada`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias_has_modalidad_cursada`
--

LOCK TABLES `materias_has_modalidad_cursada` WRITE;
/*!40000 ALTER TABLE `materias_has_modalidad_cursada` DISABLE KEYS */;
/*!40000 ALTER TABLE `materias_has_modalidad_cursada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modalidad_cursada`
--

DROP TABLE IF EXISTS `modalidad_cursada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modalidad_cursada` (
  `idModalidad_Cursada` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idModalidad_Cursada`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modalidad_cursada`
--

LOCK TABLES `modalidad_cursada` WRITE;
/*!40000 ALTER TABLE `modalidad_cursada` DISABLE KEYS */;
/*!40000 ALTER TABLE `modalidad_cursada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `novedades`
--

DROP TABLE IF EXISTS `novedades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novedades` (
  `idNovedad` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `contenido` text NOT NULL,
  `idUsuario_autor` int NOT NULL,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idNovedad`),
  KEY `fk_Novedades_Usuarios1_idx` (`idUsuario_autor`),
  CONSTRAINT `fk_Novedades_Usuarios1` FOREIGN KEY (`idUsuario_autor`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novedades`
--

LOCK TABLES `novedades` WRITE;
/*!40000 ALTER TABLE `novedades` DISABLE KEYS */;
/*!40000 ALTER TABLE `novedades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preceptores`
--

DROP TABLE IF EXISTS `preceptores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preceptores` (
  `idPreceptor` int NOT NULL,
  `Preceptorescol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPreceptor`),
  CONSTRAINT `fk_Preceptores_Usuarios1` FOREIGN KEY (`idPreceptor`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preceptores`
--

LOCK TABLES `preceptores` WRITE;
/*!40000 ALTER TABLE `preceptores` DISABLE KEYS */;
/*!40000 ALTER TABLE `preceptores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesores`
--

DROP TABLE IF EXISTS `profesores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesores` (
  `idProfesor` int NOT NULL,
  PRIMARY KEY (`idProfesor`),
  CONSTRAINT `fk_Profesores_Usuarios1` FOREIGN KEY (`idProfesor`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesores`
--

LOCK TABLES `profesores` WRITE;
/*!40000 ALTER TABLE `profesores` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `idRol` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_has_usuarios`
--

DROP TABLE IF EXISTS `roles_has_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_has_usuarios` (
  `idRol` int NOT NULL,
  `idUsuario` int NOT NULL,
  PRIMARY KEY (`idRol`,`idUsuario`),
  KEY `fk_Roles_has_Usuarios_Usuarios1_idx` (`idUsuario`),
  CONSTRAINT `fk_Roles_has_Usuarios_Roles` FOREIGN KEY (`idRol`) REFERENCES `roles` (`idRol`),
  CONSTRAINT `fk_Roles_has_Usuarios_Usuarios1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_has_usuarios`
--

LOCK TABLES `roles_has_usuarios` WRITE;
/*!40000 ALTER TABLE `roles_has_usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles_has_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sedes`
--

DROP TABLE IF EXISTS `sedes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sedes` (
  `idSede` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idSede`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sedes`
--

LOCK TABLES `sedes` WRITE;
/*!40000 ALTER TABLE `sedes` DISABLE KEYS */;
/*!40000 ALTER TABLE `sedes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_categoria_carrera`
--

DROP TABLE IF EXISTS `sub_categoria_carrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_categoria_carrera` (
  `idsub_categoria_carrera` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idsub_categoria_carrera`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categoria_carrera`
--

LOCK TABLES `sub_categoria_carrera` WRITE;
/*!40000 ALTER TABLE `sub_categoria_carrera` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_categoria_carrera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_categoria_materias`
--

DROP TABLE IF EXISTS `sub_categoria_materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_categoria_materias` (
  `idsub_categoria_materias` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idsub_categoria_materias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categoria_materias`
--

LOCK TABLES `sub_categoria_materias` WRITE;
/*!40000 ALTER TABLE `sub_categoria_materias` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_categoria_materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_categoria_materias_has_materias`
--

DROP TABLE IF EXISTS `sub_categoria_materias_has_materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_categoria_materias_has_materias` (
  `sub_categoria_materias_idsub_categoria_materias` int NOT NULL,
  `Materias_idMateria` int NOT NULL,
  PRIMARY KEY (`sub_categoria_materias_idsub_categoria_materias`,`Materias_idMateria`),
  KEY `fk_sub_categoria_materias_has_Materias_Materias1_idx` (`Materias_idMateria`),
  CONSTRAINT `fk_sub_categoria_m_has_M_Materias1` FOREIGN KEY (`Materias_idMateria`) REFERENCES `materias` (`idMateria`),
  CONSTRAINT `fk_sub_categoria_m_has_M_sub_categoria` FOREIGN KEY (`sub_categoria_materias_idsub_categoria_materias`) REFERENCES `sub_categoria_materias` (`idsub_categoria_materias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categoria_materias_has_materias`
--

LOCK TABLES `sub_categoria_materias_has_materias` WRITE;
/*!40000 ALTER TABLE `sub_categoria_materias_has_materias` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_categoria_materias_has_materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_carrera`
--

DROP TABLE IF EXISTS `tipo_carrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_carrera` (
  `idTipo_Carrera` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idTipo_Carrera`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_carrera`
--

LOCK TABLES `tipo_carrera` WRITE;
/*!40000 ALTER TABLE `tipo_carrera` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_carrera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_estado_materia_alumno`
--

DROP TABLE IF EXISTS `tipo_estado_materia_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_estado_materia_alumno` (
  `idtipo_Estado_Materia_Alumno` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idtipo_Estado_Materia_Alumno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_estado_materia_alumno`
--

LOCK TABLES `tipo_estado_materia_alumno` WRITE;
/*!40000 ALTER TABLE `tipo_estado_materia_alumno` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_estado_materia_alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_materia`
--

DROP TABLE IF EXISTS `tipo_materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_materia` (
  `idTipo_Materia` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idTipo_Materia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_materia`
--

LOCK TABLES `tipo_materia` WRITE;
/*!40000 ALTER TABLE `tipo_materia` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(45) NOT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `numero_tel` varchar(20) DEFAULT NULL,
  `contraseña` varchar(255) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `localidad` varchar(100) DEFAULT NULL,
  `tel_emergencia` varchar(20) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `avatarUrl` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `dni_UNIQUE` (`dni`),
  UNIQUE KEY `correo_UNIQUE` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-04 13:01:14
