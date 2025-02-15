import express from "express";
import { config } from "dotenv";
import user from "./users.json" assert { type: "json" };
config();
const app = express();

app.listen(process.env.PORT, () =>
  console.log(`app started at http://localhost:${process.env.PORT}`)
);

app.get("/", (req, res) => {
  return res.status(200).send("Hello");
});
app.get("/api", (req, res) => {
  return res.status(200).json(user);
});
