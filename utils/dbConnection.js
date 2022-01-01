const mysql = require('mysql2');

//Created A DB: nodejs_login & a stduents Table with the following schema

// CREATE TABLE students (id int(10) unsigned NOT NULL AUTO_INCREMENT,rollno int(4) unsigned NOT NULL ,name varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,email varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,password varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL, standard varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,standard_1_remark varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci ,standard_1_per varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci ,standard_2_remark varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci ,standard_2_per varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci ,standard_3_remark varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_3_per varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_4_remark varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_4_per varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_5_remark varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_5_per varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_6_remark varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_6_per varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_7_remark varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_7_per varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_8_remark varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_8_per varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_9_remark varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,standard_9_per varchar(10) DEFAULT 'Null' COLLATE utf8mb4_unicode_ci  ,PRIMARY KEY (id),UNIQUE KEY email (email)) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nodejs_login'
});

module.exports = dbConnection.promise();

