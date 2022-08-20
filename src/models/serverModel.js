const database = require('../database/config');

function registerServer(model, os, cpuAmount, ramMemory, diskAmount) {
    console.log("ACESSEI O SERVER MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registerServer(): ", model, os, cpuAmount, ramMemory, diskAmount);
    var instruction = 
    `
    INSERT INTO Servidor (modelo, SO, qtd_cpus, qtd_memoria_ram, qtd_disco) VALUES ('${model}', '${os}', '${cpuAmount}', '${ramMemory}', '${diskAmount}');
    `
    console.log("Executando a instrução SQL: \n" + instruction);
    return database.execute(instruction);
}

function getServers(table) {
    console.log("ACESSEI O SERVER MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function getServer(): Servidor");
    var instruction = 
    `
    SELECT * FROM ${table};
    `
    return database.execute(instruction);
}

function getCurrentServer(idServer) {
    console.log("ACESSEI O SERVER MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function getServer(): ", idServer);
    var instruction =
    `
    SELECT * FROM Servidor WHERE idServidor = ${idServer};
    `
    return database.execute(instruction);
}


module.exports = {
    registerServer,
    getServers,
    getCurrentServer
}