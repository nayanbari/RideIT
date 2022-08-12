const express = require("express");
const mongoose = require("mongoose");
// const Customer = require("./model/customer");
// require("dotenv").config();
const Router = require("./api/customer")
const cors = require('cors')

const app = express();
app.use('*', cors());
app.use(express.json());

const port = 3001;
const uri = 'mongodb+srv://nayan:nayan@cluster0.kpf8080.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error: "));
connection.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});