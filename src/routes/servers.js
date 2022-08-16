var express = require('express');
var router = express.router();

var serverController = require('../controllers/serverController');

router.post("/servers", (req, res) => {
    serverController.registerServer(req, res);
});

module.exports = router;