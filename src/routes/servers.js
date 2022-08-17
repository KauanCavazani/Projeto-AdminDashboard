var express = require('express');
var router = express.Router();

var serverController = require('../controllers/serverController');

router.post("/registerServer", (req, res) => {
    serverController.registerServer(req, res);
});

module.exports = router;