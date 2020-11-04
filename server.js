const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

//DB
const users = {};

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("Client"));

//listen
app.listen(port, () => {
  console.log(`server running on ${port}`);
});

//route
app.get("/", (req, res) => {
  res.json({ message: "success" });
});

app.post("/addUser", (req, res) => {
  users.message = "POST";
  users.username = req.body.username;
  users.email = req.body.email;
  res.json(users);
});

app.get("/all", (req, res) => {
  res.json(users);
  console.log(users);
});
