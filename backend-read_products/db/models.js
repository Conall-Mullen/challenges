// db/models/Joke.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const fishSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
});

const fish = mongoose.models.Fish || mongoose.model("Fish", fishSchema);

export default fish;
