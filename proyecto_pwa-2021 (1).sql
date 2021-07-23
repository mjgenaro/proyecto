-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-07-2021 a las 20:30:07
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto pwa-2021`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

DROP TABLE IF EXISTS `jugadores`;
CREATE TABLE IF NOT EXISTS `jugadores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `password` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `confirmacionCorreo` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `nombreCompleto` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `edad` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `posicion` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `descripcion` varchar(4000) COLLATE utf16_spanish2_ci NOT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT '0',
  `eliminado` tinyint(1) NOT NULL DEFAULT '1',
  `ts_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`id`, `username`, `password`, `confirmacionCorreo`, `nombreCompleto`, `mail`, `edad`, `posicion`, `descripcion`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(2, 'gustacarp', 'c03388bf92de35f1d20e19f0ca27c061894c0179', '3c1b0822-c29a-44ed-ba3d-ca1cd2477903', 'Gustavo Carnelli', 'solari_beilison@hotmail.com', '33', 'delantero', 'Delantero centro, goleador', 1, 1, '2021-07-07 15:33:27', '2021-07-12 17:09:26'),
(3, 'mnasso', '442f3791370ea9ab542ff144f17f9bf34d8b69b1', '19a6b59c-90ca-47eb-ae7e-1b3b86817496', 'Matias Nasso Bordin', 'nassobordin_matias@hotmail.com', '33', 'delantero', 'juego por afuera o de volante', 1, 1, '2021-07-07 15:37:24', '2021-07-12 17:10:44'),
(5, 'pechi2000', '9f7d8f62a4f7998a44031b4fdcba9111e6ebe604', '3604df02-1de6-4164-86f4-8181d5375e8a', 'Francisco Pages', 'pechipages@gmail.com', '30', 'delantero', 'Delantero por afuera, veloz', 1, 1, '2021-07-07 15:40:05', '2021-07-12 17:12:30'),
(6, 'axelg', '812e6d8058602a47435497046eeb2205b60f7406', '776aa162-182d-4cd4-bed3-ccb70f5949d0', 'Axel Gayol', 'argayol@gmail.com', '40', 'volante', 'Volante zurdo o enganche', 0, 1, '2021-07-07 15:43:55', '2021-07-07 15:43:55'),
(7, 'ferdifloyd', '1e4598cf1af7064ffcdde547a6f68b282a9ad251', '989e0829-d6db-4a32-8a2b-097e312bd38f', 'Fernando redruello', 'fernandoredruello82@gmail.com', '39', 'volante', 'Volante defensivo por afurera', 0, 1, '2021-07-07 16:02:58', '2021-07-07 16:02:58'),
(8, 'javiermac', 'c18c651f0eefd0ba6437be802a069ca3c826de88', '7b50a0c2-cc5d-4134-9595-1a11d5312d94', 'Javier Maceiras', 'javiermaceiras@hotmail.com', '39', 'defensor', 'defensa lateral', 1, 1, '2021-07-07 16:04:30', '2021-07-12 17:13:44'),
(9, 'matiasrp', '442f3791370ea9ab542ff144f17f9bf34d8b69b1', '0b2fd463-d8b6-4a4a-b481-c6b145a7dbef', 'Matias Castro', 'c_matias22@hotmail.com', '24', 'delantero', 'delantero centro', 1, 1, '2021-07-07 16:11:14', '2021-07-12 18:50:38'),
(10, 'caohuracan', '32091f8cf534516faa1d4659e7da435c50a431a0', 'c1e7ed94-fccb-4693-a2a1-83967155fa96', 'Cesar Denegri', 'cdenegri82@gmail.com', '24', 'volante', 'volante central', 0, 1, '2021-07-07 16:13:39', '2021-07-07 16:13:39'),
(11, 'igreco', '05a9b3fa65b6126b01eeea6b9047a5571f6213f4', 'f0b96ca8-af41-4385-9df3-757f9a76ce65', 'Ignacio Greco', 'iagreco@hotmail.com', '42', 'delantero', 'delantero goleador', 0, 1, '2021-07-07 16:14:40', '2021-07-07 16:14:40'),
(12, 'pm77', '550d8f48c4025c33aa1234dbae7476ffb9fde3fb', '99554813-4345-4186-bc2c-5984fcf47e85', 'Pablo Miguel', 'pmiguel77@hotmail.com', '42', 'delantero', 'delantero o volante central', 1, 1, '2021-07-07 16:22:59', '2021-07-21 13:04:39'),
(13, 'facude', 'd2e0db4288bc3b821a90aca6c7305b9dedbeb410', 'edfe313e-25d7-4eb3-9988-44dfef7afcac', 'Facundo de Elizalde', 'facundodeelizalde@gmail.com', '45', 'defensor', 'defensor central', 0, 1, '2021-07-07 16:23:54', '2021-07-07 16:23:54'),
(14, 'turko2021', 'eaba14693fd860d6213f7e2af5fc6f1e7d655eea', '006405c4-72d1-47d2-a16a-f17376904493', 'Sebastian Fiorino', 'lic.fiorinosebastian@gmail.com', '31', 'arquero', 'arquero poca experiencia', 0, 1, '2021-07-07 16:27:02', '2021-07-07 16:27:02'),
(15, 'pablogenaro', '550d8f48c4025c33aa1234dbae7476ffb9fde3fb', '84b591f9-193c-41bd-9882-c49bdb0144e7', 'Pablo Genaro', 'genaropablob@gmail.com', '29', 'defensor', 'defensor o volante derecho', 1, 1, '2021-07-07 16:28:18', '2021-07-12 19:01:49'),
(17, 'diegos', '4be0306f7d79fe2cc69330ef0626f8eb244528d6', '798f649d-9059-462a-8963-23fa5e56f914', 'Diego Slonimsqui', 'dslonimsqui@yahoo.com.ar', '46', 'delantero', 'delantero por afuera con desequilibrio', 1, 1, '2021-07-07 17:00:51', '2021-07-12 19:03:26'),
(18, 'nachov', '71871303c37aa4f576d644a755e7354787175369', '8e3ab24a-ae15-44bd-a4d7-69450c0ab9ef', 'Ignacio Villalba', 'ignacio.villalba@gmail.com', '48', 'defensor', 'defensor central', 1, 1, '2021-07-07 17:01:53', '2021-07-12 19:04:41'),
(19, 'julian', '8edb90e1a924be99ed12f8e7524249a8283f05ce', '74b33415-c164-4f73-9caf-ee399395dfb2', 'Julian Rodriguez', 'bochasoprano666@gmail.com', '31', 'defensor', 'defensor central o lateral', 0, 1, '2021-07-07 17:02:53', '2021-07-07 17:02:53'),
(20, 'puche', '609edafc75a168159823becc7b93d5a7e6009c4a', '345e8454-4398-45b2-b2c1-78db45ee57e8', 'Fernando Gondell', 'gondellfernando@gmail.com', '34', 'arquero', 'arquero de bastante experiencia', 1, 1, '2021-07-07 17:16:00', '2021-07-12 19:06:19'),
(21, 'elpaja', '58bfa51d42a37e4fdf2b92590cd64ec0ceea7a88', 'deb73779-6262-48cd-bc1b-5bde0edde75f', 'Manuel Pages', 'manupages@gmail.com', '32', 'defensor', 'Defensor zurdo ', 0, 1, '2021-07-07 17:17:46', '2021-07-07 17:17:46'),
(22, 'romulein', '8d3d14808c5cc48d1b242047beeef1f9f28ba3c2', '11200e91-a04c-4133-ab8c-f705feb256e4', 'Romulo Ramirez Tell', 'romuloramireztell@gmail.com', '29', 'delantero', 'delantero centro, goleador', 1, 1, '2021-07-07 17:18:40', '2021-07-12 19:07:17'),
(23, 'bombita', 'd2e0db4288bc3b821a90aca6c7305b9dedbeb410', '598576f1-e2bf-4d6c-a2d6-c3504821b1ca', 'Facundo Olarte', 'facundo.olarte@swissmedical.com.ar', '34', 'defensor', 'defensa central', 0, 1, '2021-07-07 17:20:17', '2021-07-07 17:20:17'),
(24, 'elnico', 'defa9b39812af626e5b21b9e2215d10c2b765689', '8c58aa96-030e-495d-95bc-e3d3c24622d3', 'Nicolas Manna', 'paratodostodoezln@gmail.com', '39', 'defensor', 'defensor por todos lados', 0, 1, '2021-07-07 17:21:02', '2021-07-07 17:21:02'),
(25, 'fede_alonso', 'dd870b1434dd50b96e4fb777817dc2b3389c2965', 'cadd4418-a700-42e2-a2e4-df06e356d5a0', 'Federico Alonso', 'fn.alonso88@gmail.com', '31', 'defensor', 'defensa lateral', 1, 1, '2021-07-07 17:21:43', '2021-07-12 19:08:52'),
(26, 'elgrillo', 'da5c75a016901a7ecfd933c352709b9ff6a6c0c8', 'cbaebbb1-e059-4d3e-a613-65e13f567e42', 'Guillermo Ruiz', 'grilloruiz@gmail.com', '41', 'defensor', 'defensa lateral o volante izquierdo', 0, 1, '2021-07-07 18:38:07', '2021-07-07 18:38:07'),
(27, 'adrianof', '19a7b4d3ed620ed2e2859927fff248ce3e65a236', 'c86d0b0d-0eb8-4d9b-bb0a-59c9ba9dc11b', 'Adriano Fassina', 'capdevilaadriano@gmail.com', '36', 'delantero', 'delantero centro', 1, 1, '2021-07-07 18:39:12', '2021-07-12 19:09:44'),
(28, 'gonzalo2021', 'd33e218c29aa11ee94a04bda0882c98d814e2c6d', '2c4a662a-31d9-496f-aa00-65a06da683c1', 'Gonzalo Honigblum', 'ghonigblum@gmail.com', '46', 'defensor', 'central', 0, 1, '2021-07-07 18:46:13', '2021-07-07 18:46:13'),
(29, 'marior', '5ffe1ce0038a9a8d9d30d9063d5f1873e6adc9c1', '4614ceb5-e041-4a81-b3e2-102f1f96df68', 'Mario Ros', 'mario_ros@hotmail.com', '34', 'defensor', 'defensor poca experiencia', 0, 1, '2021-07-07 18:47:12', '2021-07-09 10:11:31'),
(30, 'cala', 'e6e1c6861527f8639c927bfdf487182f1bd621dd', '5513ba86-43da-4865-9018-891ecd81ce0c', 'Fernando Drocchi', 'drocchi@outlook.com', '34', 'volante', 'por las bandas', 0, 1, '2021-07-07 18:47:56', '2021-07-07 18:47:56'),
(31, 'sebas', 'eaba14693fd860d6213f7e2af5fc6f1e7d655eea', '48a64b8e-1e06-41d8-9835-a9fc9657dbd5', 'Sebastian Seglin Palacios', 'filialcaballito@hotmail.com', '30', 'defensor', 'por afuera', 0, 1, '2021-07-07 18:48:54', '2021-07-07 18:48:54'),
(32, 'pgrinjot', 'd44d70f48f9d563d4ef92477edcbf5024a94f395', '382a5942-e3cc-46ee-810c-bd5a0b249118', 'Pablo Grinjot', 'pablogrinjot@gmail.com', '43', 'delantero', 'punta por las bandas', 0, 1, '2021-07-07 19:04:46', '2021-07-07 19:04:46'),
(37, 'kevin', '4e751199da4b089643434d477b04110ac5279e79', '497b3f03-33f5-4323-94fd-8c0d4815bf31', 'Kevin sibile', 'sibilekev@gmail.com', '19', 'delantero', 'punta por las bandas', 1, 1, '2021-07-09 10:29:48', '2021-07-23 16:28:44'),
(53, 'mjgenaro', '5ffe1ce0038a9a8d9d30d9063d5f1873e6adc9c1', '123cc0c9-2b87-49a4-a1a6-ec6a7669a18d', 'Mariano Genaro', 'mjgenaro@gmail.com', '38', 'defensor', 'Voltante central en cancha de 11 y defensor en cancha chica', 1, 1, '2021-07-23 17:13:57', '2021-07-23 17:14:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores_imagenes`
--

DROP TABLE IF EXISTS `jugadores_imagenes`;
CREATE TABLE IF NOT EXISTS `jugadores_imagenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_jugadores` int(11) NOT NULL,
  `uuid` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT '1',
  `eliminado` tinyint(4) NOT NULL DEFAULT '0',
  `ts_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `jugadores_imagenes`
--

INSERT INTO `jugadores_imagenes` (`id`, `id_jugadores`, `uuid`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(18, 53, '6f6a7b98-7cb4-48ec-82a4-62fce5bb5006', 1, 0, '2021-07-23 17:18:52', '2021-07-23 17:18:52'),
(4, 37, '1b844319-0d23-47ea-82e9-2bc9aa333d62', 1, 0, '2021-07-21 11:04:25', '2021-07-21 11:04:25'),
(5, 2, '892ffe32-f11a-4310-af32-56d65ffe04dc', 1, 0, '2021-07-21 12:57:00', '2021-07-21 12:57:00'),
(6, 3, 'b45f9f37-681b-4952-ad7d-032ede78be5c', 1, 0, '2021-07-21 12:58:09', '2021-07-21 12:58:09'),
(7, 5, '7132c85b-043e-4915-8ccf-5f7051d0185a', 1, 0, '2021-07-21 12:59:22', '2021-07-21 12:59:22'),
(8, 8, 'f096ab16-1f3b-40d5-8f9d-2b9e3a00f5d0', 1, 0, '2021-07-21 13:00:50', '2021-07-21 13:00:50'),
(9, 9, 'a7146935-89d5-4dcf-9aac-397f8d5b4c92', 1, 0, '2021-07-21 13:01:49', '2021-07-21 13:01:49'),
(10, 12, 'ed067d62-3e00-4452-aae1-886fda73835d', 1, 0, '2021-07-21 13:06:15', '2021-07-21 13:06:15'),
(11, 15, 'b9b547b7-86d7-4e09-9378-f06dcccf3ccf', 1, 0, '2021-07-21 13:08:46', '2021-07-21 13:08:46'),
(12, 17, '69a3dd85-f86e-43f6-a842-2b735cff25ec', 1, 0, '2021-07-21 13:11:03', '2021-07-21 13:11:03'),
(13, 18, '2bfe16e2-6683-429c-9275-d61931b1cb26', 1, 0, '2021-07-21 13:12:17', '2021-07-21 13:12:17'),
(14, 20, '2db49e7d-a722-4451-9ece-db47a89d2239', 1, 0, '2021-07-21 13:16:36', '2021-07-21 13:16:36'),
(15, 22, 'a0e00b5e-8790-4cf9-abd0-c3a387d6fea6', 1, 0, '2021-07-21 13:20:04', '2021-07-21 13:20:04'),
(16, 25, '159db046-b539-4e1b-b101-0d0eb010ea4c', 1, 0, '2021-07-21 13:24:09', '2021-07-21 13:24:09'),
(17, 27, '33790df9-51d4-4bab-8e02-cd2c66b285f1', 1, 0, '2021-07-21 13:25:58', '2021-07-21 13:25:58');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
