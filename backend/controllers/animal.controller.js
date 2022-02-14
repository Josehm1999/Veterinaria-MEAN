import Response from "express";

import animal from "../models/animal.model.js";
import user from "../models/user.model.js";

const registerAnimal = async (req, res = Response) => {
  const { name, race, height, health, age } = req.body;

  if (!name || !race || !height || !health || !age)
    return res.status(400).send({
      message: "Incomplete data",
    });

  const schema = new animal({
    name,
    race,
    height,
    health,
    age,
  });

  const result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register animal" });
  res.status(200).send({ result });
};

const adoption = async (req, res = Response) => {
  const { animalId, userId } = req.body;

  if ((!animalId, !userId))
    return res.status(400).send({
      message: "Incomplete data",
    });

  let animalToAdopt = await animal.findOne({ _id: animalId });
  let userOwner = await user.findOne({ _id: userId });

  if (!animalToAdopt || !userOwner)
    return res.status(400).send({
      message: "Enter a valid user or animal",
    });

  if (animalToAdopt.isAdopted) {
    return res.status(400).send({
      message: "This animal has already been adopted",
    });
  }

  animalToAdopt.isAdopted = true;
  animalToAdopt.owner = userId;
  animalToAdopt.registerDate = Date.now();

  await animalToAdopt.save();
  res.status(200).send({
    message: "The adoption was succesful",
  });
};

const getAnimals = async (_, res = Response) => {
  const animals = await animal.find({});

  if (!animals)
    return res.status(500).send({ message: "Failed to get animals" });

  res.status(200).send({ animals });
};

export { registerAnimal, getAnimals, adoption };
