const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const payTRRouter = require("./router/payTR.js");

// cors middleware
app.use(cors());

// body-parser middleware'i uygulamaya ekle
app.use(bodyParser.json()); // JSON verilerini işlemek için
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded verileri işlemek için

app.use(payTR);

// Start
app.listen(3001, () => {
    console.log("Sunucu 3001 portunda başlatıldı!");
})