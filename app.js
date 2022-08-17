var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
var cors = require('cors');
var DOOR = 3333;

var app = express();

var indexRouter = require('./src/routes/index');
var serverRouter = require('./src/routes/servers');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/servers", serverRouter);

app.listen(DOOR, () => {
    console.log(
        `Servidor safecommerce está rodando\n
        Caminho: http://localhost:${DOOR}`
    );
});