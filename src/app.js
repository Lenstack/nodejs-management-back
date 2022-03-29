const express = require("express");
const morgan = require("morgan");
const config = require("./config");
//const cors = require("cors")
const {userRoute, authRoute} = require("./routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
//app.use(cors())

app.use(`/${config.API_VERSION}/user`, userRoute);
app.use(`/${config.API_VERSION}/auth`, authRoute);

module.exports = app;
