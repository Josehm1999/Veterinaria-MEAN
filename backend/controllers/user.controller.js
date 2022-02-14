import Response from "express";
import user from "../models/user.model.js";

const registerUser = async (req, res = Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).send({
      message: "Incomplete data",
    });

  const schema = new user({
    name,
    email,
    password,
  });

  const result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register user" });

  res.status(200).send({ result });
};

// const adoption = async (req, res = Response) => {
//   const { animalName, userName } = req.body;
//
// }

const getUsers = async (_, res = Response) => {
  const users = await user.find({});

  if (!users) return res.status(500).send({ message: "Failed to get users" });

  res.status(200).send({ users });
};

export { registerUser, getUsers };
