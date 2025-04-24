import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3722",
  database: "dashboard",
});

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const SECRET_KEY = process.env.SECRET_KEY;

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get("/", authenticateToken, async (req, res) => {
  res.send("Connected to backend");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ error: "Missing credentials" });

  try {
    const [rows] = await db.execute("SELECT * FROM admins WHERE username = ?", [
      username,
    ]);
    const admin = rows[0];

    if (!admin) return res.status(401).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );

    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login failed" });
  }
});

app.get("/merchants", authenticateToken, async (req, res) => {
  try {
    const results = await db.execute("SELECT * FROM merchants");
    res.json(results[0]);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Failed to get merchants" });
  }
});

app.get("/orders", authenticateToken, async (req, res) => {
  try {
    const results = await db.execute("SELECT * FROM orders");
    res.json(results[0]);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Failed to get orders" });
  }
});

app.get("/installments", authenticateToken, async (req, res) => {
  try {
    const results = await db.execute("SELECT * FROM installments");
    res.json(results[0]);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Failed to get installments" });
  }
});

app.get("/items", authenticateToken, async (req, res) => {
  try {
    const results = await db.execute("SELECT * FROM items");
    res.json(results[0]);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Failed to get items" });
  }
});

app.get("/merchants/:id", authenticateToken, async (req, res) => {
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

    const [orderRows] = await db.execute(
      "SELECT * FROM orders WHERE merchant_id = ?",
      [id]
    );

    return res.json({
      merchant: merchantRows[0],
      items: itemRows,
      orders: orderRows,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to get merchant and items" });
  }
});

app.get("/orders/:id", authenticateToken, async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await db.execute("SELECT * FROM orders WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to get order" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
