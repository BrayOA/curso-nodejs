import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hola!!!!</h1>");
});

app.get("/home", (req, res) => {
  res.send("<h1>Bienvenidos al home !!!</h1>");
});

app.listen(3000);
console.log("server on port ", 3000);
