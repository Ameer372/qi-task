import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3722",
  database: "dashboard",
});

app.use(cors());

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

app.get("/merchants", async (req, res) => {
  try {
    const results = await db.execute("SELECT * FROM merchants");
    res.json(results[0]);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Failed to get merchants" });
  }
});

app.get("/orders", async (req, res) => {
  try {
    const results = await db.execute("SELECT * FROM orders");
    res.json(results[0]);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Failed to get orders" });
  }
});

app.get("/installments", async (req, res) => {
  try {
    const results = await db.execute("SELECT * FROM installments");
    res.json(results[0]);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Failed to get installments" });
  }
});

app.get("/items", async (req, res) => {
  try {
    const results = await db.execute("SELECT * FROM items");
    res.json(results[0]);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Failed to get items" });
  }
});

app.get("/merchants/:id", async (req, res) => {
  const id = req.params.id;
  try {
    // Fetch merchant info
    const [merchantRows] = await db.execute(
      "SELECT * FROM merchants WHERE id = ?",
      [id]
    );

    if (merchantRows.length === 0) {
      return res.status(404).json({ error: "Merchant not found" });
    }

    // Fetch items for that merchant
    const [itemRows] = await db.execute(
      "SELECT * FROM items WHERE merchant_id = ?",
      [id]
    );

    return res.json({
      merchant: merchantRows[0],
      items: itemRows,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to get merchant and items" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
