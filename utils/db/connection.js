// import mongoose, { Model } from "mongoose";

// const { DATABASE_URL } = process.env;

// export const connect = async () => {
//   const conn = await mongoose
//     .connect(DATABASE_URL as string)
//     .catch((err) => console.log(err));
//   console.log("Mongoose Connection Established");

//   const McPaySchema = new mongoose.Schema({
//     item: String,
//     completed: Boolean,
//   });

//   const mcPay = mongoose.models.mcPay || mongoose.model("McPay", McPaySchema);

//   return { conn, mcPay };
// };

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://trishna0703:nijo123@cluster0.jo1bfqq.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`MongoDB connected : ${con.connection.host}`)
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
}
// const conn = mongoose.connection;


// conn.on("connected", () => {
//   console.log("connected to db");
// });

// conn.on("disconnected", () => {
//   console.log("disconnected from db");
// });

// conn.on("error", (err) => {
//   console.log("could not connected to db", err);
// });
module.exports = connectDB;