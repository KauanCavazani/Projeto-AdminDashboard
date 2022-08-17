var express = require('express');
var router = express.Router();

var serverController = require('../controllers/serverController');

router.post("/registerServer", (req, res) => {
    serverController.registerServer(req, res);
});

router.post("/getServers", (req, res) => {
    serverController.getServers(req, res);
});

module.exports = router;