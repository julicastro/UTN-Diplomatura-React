CREATE TABLE `utn_course`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(250) NULL,
  `password` VARCHAR(250) NULL,
  PRIMARY KEY (`id`));

INSERT INTO `utn_course`.`usuarios` (`usuario`, `password`) VALUES ('juli', MD5('1234'));
INSERT INTO `utn_course`.`usuarios` (`usuario`, `password`) VALUES ('root', MD5('root'));