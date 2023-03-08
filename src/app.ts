import express from "express";
import * as mongoose from "mongoose";

import { User } from "./models/User.model";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5100;

app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/node-module");
  console.log(`Server started on port ${PORT}`);
});

app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const body = req.body;
    const user = await User.create({ ...body });
    res.json({ message: "User created", data: user });
  } catch (e) {
    console.log(e.message);
  }
});

app.get("/users/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById({ _id: userId });
  res.json(user);
});

app.put("/users/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = req.body;
    const updatedUser = await User.updateOne({ _id: userId }, { ...user });
    res.json({
      message: "User updated",
      data: updatedUser,
    });
  } catch (e) {
    console.log(e);
  }
});

app.delete("/users/:userId", async (req, res) => {
  const { userId } = req.params;
  await User.deleteOne({ _id: userId });
  res.json({
    message: "User deleted",
  });
});
