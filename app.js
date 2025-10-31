const express = require("express");
const app = express();
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const Hospital = require('./models/hospital');
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

const MONGO_URL = 'mongodb://127.0.0.1:27017/HospitalSystem';

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req,res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});