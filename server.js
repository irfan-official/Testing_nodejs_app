import express from "express";
import { config } from "dotenv";
import fs from "fs";
const user = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

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
