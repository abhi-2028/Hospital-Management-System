const express = require("express");
const app = express();
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const Hospital = require('./models/hospital');
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
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

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/hospitals", async (req, res) => {
    let allHospitals = await Hospital.find({});
    res.render("hospitals/index", { allHospitals });
});

app.get("/hospitals/new", (req, res) => {
    res.render("hospitals/new");
});

app.get("/hospitals/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Invalid hospital id");
    }
    const hospital = await Hospital.findById(id);
    if (!hospital) return res.status(404).send("Hospital not found");
    res.render("hospitals/show", { hospital });
});

app.post("/hospitals", async (req, res) => {
    const { name, address, contact, image } = req.body;
    const hospital = new Hospital({ name, address, contact, image });
    await hospital.save();
    res.redirect("/hospitals");

});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});