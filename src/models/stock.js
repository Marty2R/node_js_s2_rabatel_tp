import mongoose from "mongoose";
const { Schema, model } = mongoose;

const stockSchema = new Schema({
  brand: String,
  price: Number,
  quant: Number,
  desc: String,
  size: String,
});

export default model("Stock", stockSchema);
