import mongoose from "mongoose";
//local = mongoose.connect("mongodb://127.0.0.1:27017/alura-node");
mongoose.connect("mongodb+srv://alura:123@alura.ghqga.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;