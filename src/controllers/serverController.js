var serverModel = require("../models/serverModel");

function registerServer(req, res) {
    var model = req.body.serverModel;
    var os = req.body.serverOs;
    var cpuAmount = req.body.serverCpuAmount;
    var ramMemory = req.body.serverRamMemory;
    var diskAmount = req.body.serverDiskAmount;

    if(model === undefined) {
        res.status(400).send("O modelo está undefined!");
    } else if(os === undefined) {
        res.status(400).send("O sistema operacional está undefined!");
    } else if(cpuAmount === undefined) {
        res.status(400).send("A quantidade de CPU está undefined!");
    } else if(ramMemory === undefined) {
        res.status(400).send("A memória RAM está undefined!");
    } else if(diskAmount === undefined) {
        res.status(400).send("A quantidade de disco está undefined!");
    }

    serverModel.registerServer(model, os, cpuAmount, ramMemory, diskAmount)
        .then(
            function (result) {
                res.json(result);
            }
        ).catch(
            function (error) {
                console.log(error);
                console.log(
                    "\nHouve um erro ao realizar o cadastro do servidor! Erro: ",
                    error.sqlMessage
                );
                res.status(500).json(error.sqlMessage);
            }
        );
};

module.exports = {
    registerServer
}