import express from "express";
import { config } from "dotenv";

const user = [
  {
    id: 1,
    first_name: "Felizio",
    last_name: "Jacson",
    email: "fjacson0@google.ca",
    gender: "Male",
    ip_address: "187.43.39.200",
  },
  {
    id: 2,
    first_name: "Ingamar",
    last_name: "Rennles",
    email: "irennles1@woothemes.com",
    gender: "Male",
    ip_address: "238.221.68.72",
  },
  {
    id: 3,
    first_name: "Svend",
    last_name: "Sycamore",
    email: "ssycamore2@vkontakte.ru",
    gender: "Male",
    ip_address: "123.219.162.241",
  },
  {
    id: 4,
    first_name: "Harriet",
    last_name: "Binge",
    email: "hbinge3@edublogs.org",
    gender: "Female",
    ip_address: "175.229.114.12",
  },
  {
    id: 5,
    first_name: "Francene",
    last_name: "Pavlishchev",
    email: "fpavlishchev4@dell.com",
    gender: "Female",
    ip_address: "7.68.91.186",
  },
  {
    id: 6,
    first_name: "Lisabeth",
    last_name: "Andreoletti",
    email: "landreoletti5@indiatimes.com",
    gender: "Female",
    ip_address: "250.183.235.157",
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
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
