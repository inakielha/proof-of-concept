const express = require("express");
const thumbnail = require("./routes/thumbnail")
const serverless = require('serverless-http');
require('dotenv').config()

const app = express()

app.set("port", 4000)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.json());


app.use("/validate",thumbnail);

app.listen(app.get("port"),()=>{
    console.log(`app corriendo en puerto ${app.get("port")}`)
})
module.exports.handler = serverless(app);