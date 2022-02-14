import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  race: {
    type: String,
    required: [true, "La raza es obligatoria"],
  },
  height: {
    type: String,
    required: [true, "La altura es obligatoria"],
  },
  img: {
    type: String,
  },
  health: {
    type: String,
    required: [true, "El estado de salud es obligatorio"],
  },
  age: { type: Number, required: [true, "La edad es obligatoria"] },
  isAdopted: { type: Boolean, default: false },
  owner: { type: mongoose.Schema.ObjectId, ref: "users" },
  registerDate: { type: Date, default: Date.now },
});

const animal = mongoose.model("animals", animalSchema);
export default animal;
