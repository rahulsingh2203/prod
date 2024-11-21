require('dotenv').config();
const express = require("express"); //Common JS Module
// import express from "express"; //ES Module
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("rahulsingh.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Form</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Application is running on ${process.env.PORT} port.`);
});
