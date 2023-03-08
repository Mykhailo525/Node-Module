import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("hello");

const PORT = 5100;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
