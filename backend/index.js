import express from "express";
import mysql from "mysql2/promise";

const app = express();

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3722",
  database: "dashboard",
});

app.get("/", (req, res) => {
  const queries = [
    "SELECT * FROM merchants",
    "SELECT * FROM orders",
    "SELECT * FROM installments",
    "SELECT * FROM items",
  ];

  Promise.all(queries.map((query) => db.query(query)))
    .then((results) => {
      const data = {
        merchants: results[0][0],
        orders: results[1][0],
        installments: results[2][0],
        items: results[3][0],
      };
      res.json(data);
    })
    .catch((err) => console.log(err));
});

app.get("/merchants", (req, res) => {
  db.query("SELECT * FROM merchants", (err, result) => {
    if (err) return console.log(err);
    return res.json(result);
  });
});

app.get("/orders", (req, res) => {
  db.query("SELECT * FROM orders", (err, result) => {
    if (err) return console.log(err);
    return res.json(result);
  });
});

app.get("/installments", (req, res) => {
  db.query("SELECT * FROM installments", (err, result) => {
    if (err) return console.log(err);
    return res.json(result);
  });
});

app.get("/items", (req, res) => {
  db.query("SELECT * FROM items", (err, result) => {
    if (err) return console.log(err);
    return res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
