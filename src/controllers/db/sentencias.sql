

CREATE TABLE categories ( 
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(20) NOT NULL,
PRIMARY KEY (id));
 

CREATE TABLE products ( 
id INT NOT NULL AUTO_INCREMENT ,
title VARCHAR(150) NOT NULL ,
price INT NOT NULL,
stock INT NOT NULL,
description VARCHAR(300) NOT NULL
category_id INT,
PRIMARY KEY  (id),
FOREIGN KEY (category_id) REFERENCES categories(id)) 


CREATE TABLE users ( 
id INT NOT NULL AUTO_INCREMENT ,
name VARCHAR(50) NOT NULL ,
email VARCHAR(150) NOT NULL ,
password VARCHAR(20) NOT NULL ,
role VARCHAR(30) NOT NULL ,
image VARCHAR(500) NOT NULL,
PRIMARY KEY (id));

