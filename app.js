const express = require('express')
const app = express()

app.use(express.static("styles"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/templates/login.html");
})

app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + "/templates/index.html");
})

app.get("/records", (req, res) => {
    res.sendFile(__dirname + "/templates/records.html");
})

app.listen(6700);