const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const DOOR = 3333;

const app = express();

const indexRouter = require('./src/routes/index');
const serverRouter = require('./src/routes/servers');

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