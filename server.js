const express = require("express");
const data = require('./src/utils/fakeData.json'); // your json file path

const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/fakeData", function(req, res) {
    res.send(data);
});

app.listen(5000, () => console.log('Example app listening on port 5000!'));