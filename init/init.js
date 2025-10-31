const mongoose = require("mongoose");
const Hospital = require("../models/hospital");
const hospitalsData = require("./data");

const MONGO_URL = 'mongodb://127.0.0.1:27017/HospitalSystem';

main()
  .then(() => {
    console.log("✅ MongoDB connection open!");
  })
  .catch((err) => {
    console.log("❌ Mongo connection error!");
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDb = async () => {
  try {
    // remove all existing hospitals (explicit empty filter for clarity)
    await Hospital.deleteMany({});
    // insert the seed data
    await Hospital.insertMany(hospitalsData);
    if (Array.isArray(hospitalsData)) {
      console.log(`✅ Inserted ${hospitalsData.length} hospital records.`);
    } else {
      console.log(`✅ Inserted hospital seed data.`);
    }
  } catch (err) {
    console.error("❌ Error while seeding database:", err);
  } 
};

initDb();