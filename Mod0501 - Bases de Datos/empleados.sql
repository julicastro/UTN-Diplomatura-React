CREATE DATABASE utn_course;

CREATE TABLE IF NOT EXISTS `utn_course`.`empleado` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `trabajo` VARCHAR(45) NOT NULL,
  `edad` INT NOT NULL,
  `sueldo` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('13', 'JUAN', 'HAGAN', 'PROGRAMADOR SENIOR', '32', '120000', 'JUAN@MAIL.COM');
INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('2', 'GONZALO', 'NUÑEZ', 'PROGRAMADOR JUNIOR', '56', '110000', 'A@MAIL.COM');
INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('3', 'MARCELO', 'PEREZ', 'PROGRAMADOR JUNIOR', '34', '100000', 'B@MAIL.COM');
INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('4', 'LIO', 'RECOLETA', 'PROGRAMADOR JUNIOR', '78', '90000', 'C@MAIL.COM');
INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('5', 'JORGE', 'PALERMO', 'PROGRAMADOR SEMI SENIOR', '89', '80000', 'D@MAIL.COM');
INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('6', 'PACO', 'RAMOS', 'PROGRAMADOR SEMI SENIOR', '22', '70000', 'E@MAIL.COM');
INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('7', 'JUESO', 'MORON', 'PROGRAMADOR SEMI SENIOR', '45', '60000', 'F@MAIL.COM');
INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('8', 'CRIS', 'HAEDO', 'PROGRAMADOR SENIOR', '23', '50000', 'G@MAIL.COM');
INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('9', 'MATI', 'JESUS', 'TRAINEE', '30', '45000', 'HG@MAIL.COM');
INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('10', 'MARCE', 'MESSI', 'PROGRAMADOR SEMI SENIOR', '20', '35000', 'I@MAIL.COM');
INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('11', 'JULIO', 'JORGE', 'PROGRAMADOR SENIOR', '36', '25000', 'J@MAIL.COM');
INSERT INTO `utn_course`.`empleado` (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `sueldo`, `email`) VALUES ('12', 'PEPE', 'GOMEZ', 'TRAINEE', '55', '10000', 'K@MAIL.COM');
