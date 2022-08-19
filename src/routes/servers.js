const express = require('express');
const router = express.Router();

const serverController = require('../controllers/serverController');

router.post("/registerServer", (req, res) => {
    serverController.registerServer(req, res);
});

router.post("/getServers", (req, res) => {
    serverController.getServers(req, res);
});

router.post("/getCurrentServer", (req, res) => {
    serverController.getCurrentServer(req, res);
});

module.exports = router;