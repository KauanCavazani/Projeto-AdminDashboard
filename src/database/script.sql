CREATE DATABASE safecommerce;
use safecommerce;

CREATE TABLE servidor (
	idServidor INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(45),
    SO VARCHAR(45),
    qtd_cpus INT,
    qtd_memoria_ram INT,
    qtd_disco INT
);

drop table Servidor;

SELECT * FROM Servidor;