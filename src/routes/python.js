const express = require('express');
const router = express.Router();

const serverController = require('../controllers/serverController');

router.get("/createPages", (req, res) => {
    serverController.createPages(req, res);
});

module.exports = router;
