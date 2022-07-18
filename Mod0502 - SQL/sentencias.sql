SELECT * FROM utn_course.empleado;

## 1) ¿Cuáles son los nombres y la ocupación de cada uno de los empleados? 
SELECT nombre, trabajo FROM utn_course.empleado; 
## 2) ¿Cuál es el nombre y la edad de cada uno de los empleados?
SELECT nombre, edad FROM utn_course.empleado; 
## 3) ¿Cuál es el nombre y la edad de todos los programadores?
SELECT nombre, edad FROM utn_course.empleado WHERE trabajo LIKE '%PROGRAMADOR%'; 
## 4) ¿Cuáles son los empleados de mas de 30 años?
SELECT nombre, edad FROM utn_course.empleado WHERE edad > 30;
## 5) ¿Cuál es el apellido y el mail de los empleados llamados Juan?
SELECT apellido, email FROM utn_course.empleado WHERE nombre = 'JUAN';
## 6) ¿Cuál es el nombre de las personas que trabajan como Programadores o Desarrolladores Web?
SELECT nombre, trabajo FROM utn_course.empleado WHERE trabajo LIKE "%PROGRAMADOR%" OR trabajo = 'DESARROLLADOR WEB';
## 7) Mostrar una lista (id_emp, nombre, apellido, trabajo) de las personas cuyo numero de empleado esté entre 5 y 10.
SELECT id, nombre, apellido, trabajo FROM utn_course.empleado WHERE id BETWEEN 5 AND 10;
## 8) ¿Cuáles son los Programadores que ganan menos de $80000?
SELECT * FROM utn_course.empleado WHERE sueldo < 80000;
## 9) ¿Cuáles son los Programadores que ganan entre $75000 y  $90000?
SELECT * FROM utn_course.empleado WHERE sueldo BETWEEN 75000 AND 90000;
## 10) ¿Cuáles son los trabajadores cuyo apellido comienza con S?
SELECT * FROM utn_course.empleado WHERE apellido LIKE 'S%';
## 11) ¿Cuáles son los trabajadores cuyo nombre termina en l?
SELECT * FROM utn_course.empleado WHERE nombre LIKE '%L';
## 12) Agregar un empleado con ID_empleado 22 con los siguientes datos: Francisco Perez,  Programador, 26 años, salario 90000, mail: francisco@bignet.com.
INSERT INTO utn_course.empleado (id, nombre, apellido, trabajo, edad, sueldo, email) VALUES (22, "FRANCISCO", "PEREZ", "PROGRAMADOR", 26, 90000, "FRANCISCO@BIGNET.COM");
## 13) Borrar los datos de Hernan Rosso.
DELETE FROM utn_course.empleado WHERE nombre = "HERNAN" AND apellido = "ROSSO";
## 14) Modificar el salario de Daniel Gutierrez a 90000.
UPDATE utn_course.empleado SET sueldo = "90000" WHERE nombre = "DANIEL" AND apellido = "GUTIERREZ";