-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-03-2022 a las 23:54:55
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `galaxy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
(1, 'licores'),
(2, 'snacks'),
(3, 'Bebidas'),
(4, 'Cigarrería');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `state` tinyint(1) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`id`, `date`, `state`, `id_usuario`, `total`) VALUES
(13, '2022-03-31 02:10:19', 1, 3, 0),
(14, '2022-03-31 02:10:58', 1, 3, 0),
(15, '2022-03-31 02:14:42', 1, 3, 0),
(16, '2022-03-31 02:20:58', 1, 3, 80000),
(17, '2022-03-31 02:29:39', 1, 3, 80000),
(18, '2022-03-31 02:31:29', 1, 3, 80000),
(19, '2022-03-31 02:32:32', 1, 3, 80000),
(20, '2022-03-31 02:33:40', 1, 3, 80000),
(21, '2022-03-31 02:35:03', 1, 3, 426000),
(22, '2022-03-31 19:25:38', 1, 3, 200000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras_productos`
--

CREATE TABLE `compras_productos` (
  `id` int(11) NOT NULL,
  `id_compras` int(11) NOT NULL,
  `id_productos` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `compras_productos`
--

INSERT INTO `compras_productos` (`id`, `id_compras`, `id_productos`, `cantidad`) VALUES
(1, 13, 22, 0),
(2, 14, 22, 0),
(3, 14, 18, 0),
(4, 14, 20, 0),
(5, 15, 22, 0),
(6, 16, 20, 0),
(7, 17, 19, 0),
(8, 18, 19, 0),
(9, 19, 19, 0),
(10, 20, 19, 0),
(11, 21, 22, 0),
(12, 21, 21, 0),
(13, 21, 19, 0),
(14, 22, 21, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `url_image` varchar(300) NOT NULL,
  `description` varchar(300) NOT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `stock`, `url_image`, `description`, `category_id`) VALUES
(18, 'Cerveza corona', 30000, 10, 'https://mercaldas.vtexassets.com/arquivos/ids/204253/Cerveza-CORONA-6unds-x355ml-c-u_116061.jpg?v=637497976269300000', 'six pack corna', 1),
(19, 'Cerveza aguila', 8000, 87, 'https://toctocdelivery.co/wp-content/uploads/2019/04/aguila-cerveza.png', '1x cerveza aguila', 1),
(20, 'Ron medellin', 80000, 10, 'https://olimpica.vtexassets.com/arquivos/ids/607402-800-450?v=637626496257900000&width=800&height=450&aspect=true', 'Ron medellin 750ml', 1),
(21, 'Ron Bacardi', 100000, 4, 'https://tuttohn.com/561-large_default/ron-bacardi-carta-blanca-750-ml.jpg', 'Ron bacardi carta blanca 750 ml', 1),
(22, 'Papa de limon', 2000, 99, 'https://tiendatellevo.com/wp-content/uploads/2020/05/Papas-Margarita-Limon.jpg', 'papas de limon margarita 105g', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(20) NOT NULL,
  `telefono` varchar(500) NOT NULL,
  `role` varchar(30) NOT NULL,
  `address` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `telefono`, `role`, `address`) VALUES
(2, 'isazaa', 'juanmarinn@gmail.com', 'juan123', '3002995464', 'ADMIN', 'callle norte'),
(3, 'ad', 'juanmarin@gmail.com', 'juan123', '4546', 'USER', 'gh'),
(4, 'juan', 'admin@admin.com', '123', '1234', 'ADMIN', 'caller sur'),
(5, 'juan pablo marin ', 'marinjuanpabloisaza@gmail.com', '123', '123', 'ADMIN', 'hola'),
(6, 'juan', 'juanmarin23@gmail.com', '1', '123', 'ADMIN', 'calle sur');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_id_usuario` (`id_usuario`);

--
-- Indices de la tabla `compras_productos`
--
ALTER TABLE `compras_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_id_compras` (`id_compras`),
  ADD KEY `FK_id_producto` (`id_productos`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `compras_productos`
--
ALTER TABLE `compras_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `FK_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `compras_productos`
--
ALTER TABLE `compras_productos`
  ADD CONSTRAINT `FK_id_compras` FOREIGN KEY (`id_compras`) REFERENCES `compra` (`id`),
  ADD CONSTRAINT `FK_id_producto` FOREIGN KEY (`id_productos`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
