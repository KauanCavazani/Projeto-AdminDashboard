const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("painel", { title: "Express" });
})

module.exports = router;