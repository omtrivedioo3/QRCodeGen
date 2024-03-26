const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
// console.log(process.env.MONGO_URI);
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://omtrivedioo3:omtrivedioo3@cluster0.tdzemt7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database is connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
