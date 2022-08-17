var mysql = require('mysql2');
var sql = require('mssql');
require('dotenv').config();

var mysqlConfig = {
    host: `${process.env.MYSQL_HOST}`,
    user: `${process.env.MYSQL_USER}`,
    database: `${process.env.MYSQL_DB}`,
    password: `${process.env.MYSQL_PASSWORD}`
};

function execute(instruction) {
    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection(mysqlConfig);
        connection.connect();
        connection.query(instruction, (error, result) => {
            connection.end();
            if(error) {
                reject(error);
            }
            console.log(result);
            resolve(result);
        });
        connection.on('error', (error) => {
            return ("ERRO NO MYSQL WORKBENCH ", error.sqlMessage);
        });
    });
};

module.exports = {
    execute
}