const serverModel = require("../models/serverModel");

const spawn = require('child_process').spawn;

function createPages(req, res) {
    var process = spawn('python', ['./public/python/createPage.py']);
    process.stdout.on('data', (data) => {
        console.log(data)
    })
}  

function registerServer(req, res) {
    var model = req.body.modelServer;
    var os = req.body.osServer;
    var cpuAmount = req.body.cpuAmountServer;
    var ramMemory = req.body.ramMemoryServer;
    var diskAmount = req.body.diskAmountServer;

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

function getServers(req, res) {
    var table = req.body.tableServer;

    serverModel.getServers(table)
        .then(
            function(result) {
                res.json(result);
            }
        ).catch(
            function(error) {
                console.log(error);
                console.log(
                    "\nHouve um erro ao receber os dados dos servidores! Erro ",
                    error.sqlMessage
                );
                res.status(500).json(error.sqlMessage);
            }
        );
}

function getCurrentServer(req, res) {
    var server = req.body.currentServer;
    console.log(server);

    serverModel.getCurrentServer(server)
        .then(
            function(result) {
                res.json(result);
            }
        ).catch(
            function(error) {
                console.log(error);
                console.log(
                    "\nHouve um erro ao receber os dados dos servidores! Erro ",
                    error.sqlMessage
                );
                res.status(500).json(error.sqlMessage);
            }
        )
}


module.exports = {
    registerServer,
    getServers,
    getCurrentServer,
    createPages
}