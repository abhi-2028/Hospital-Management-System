const express = require("express");
const app = express();
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const Hospital = require('./models/hospital');
const path = require("path");
const ejsMate = require('ejs-mate');

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

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
    res.redirect("/home");
});

app.get("/home", (req,res) => {
    res.render("home.ejs")
})

//Index Route
app.get("/hospitals", async (req, res) => {
    let allHospitals = await Hospital.find({});
    res.render("hospitals/index", { allHospitals });
});

//New Route
app.get("/hospitals/new", (req, res) => {
    res.render("hospitals/new");
});

//Show Route
app.get("/hospitals/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Invalid hospital id");
    }
    const hospital = await Hospital.findById(id);
    if (!hospital) return res.status(404).send("Hospital not found");
    res.render("hospitals/show", { hospital });
});

//Edit Route
app.get("/hospitals/:id/edit", async (req, res) => {
    const { id } = req.params;
    const hospital = await Hospital.findById(id);
    res.render("hospitals/edit", { hospital });
});

// Update Route
app.put("/hospitals/:id", async (req, res) => {
    const { id } = req.params;
    await Hospital.findByIdAndUpdate(id, { ...req.body.hospital }, { new: true, runValidators: true });
    res.redirect(`/hospitals`);
});

//Create Route
app.post("/hospitals", async (req, res) => {
    const hospital = new Hospital(req.body.hospital);
    await hospital.save();
    res.redirect("/hospitals");
});

//Delete route
app.delete("/hospitals/:id", async(req,res) => {
    let {id} = req.params;
    let deleteHospital = await Hospital.findByIdAndDelete(id);
    console.log(deleteHospital);
    res.redirect("/hospitals");
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});