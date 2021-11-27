CREATE TABLE `galaxy`.`producto` ( 
`id_producto` INT NOT NULL AUTO_INCREMENT ,
`nombre_prod` VARCHAR(20) NOT NULL ,
 `precio_prod` INT(11) NOT NULL ,
 `stock_min` INT(11) NOT NULL ,
`stock_max` INT(11) NOT NULL ,
 `stock_act` INT(11) NOT NULL ,
 PRIMARY KEY  (`id_producto`)) ENGINE = MyISAM;



CREATE TABLE `galaxy`.`cliente` ( 
`id_cliente` INT NOT NULL AUTO_INCREMENT ,
`nombre_cl` VARCHAR(20) NOT NULL ,
`apellido_cl` VARCHAR(20) NOT NULL ,
 `email_cl` VARCHAR(30) NOT NULL , ,
 `password` VARCHAR(20) NOT NULL , ,
`fecha_cl` date NOT NULL ,
 `telefonofijo_cl` VARCHAR(20) NOT NULL  ,
 `direcion_cl` VARCHAR(20) NOT NULL  ,
 `ciudad_cl` VARCHAR(20) NOT NULL ,
 `celuda_cl` VARCHAR(20) NOT NULL ,
 PRIMARY KEY  (`id_cliente`)) ENGINE = MyISAM;