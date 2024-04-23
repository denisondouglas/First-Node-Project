const express = require("express");
const uuid = require("uuid");
const app = express();
const port = 3000;
app.use(express.json());
const users = [];

app.get("/users", (request, response) => {
  return response.json(users);
});

app.post("/users", (request, response) => {
  const { name, age } = request.body;

  console.log(uuid.v4());

  // Não to crendo no trampo que foi commitar isso aqui.
});
