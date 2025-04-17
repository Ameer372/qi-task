import express from "express";
import cors from "cors";

// create express instance
const app = express();
const PORT = 3000;

// middleware
app.use(cors());
app.use(express.json());

// fake admin credentials
const ADMIN_EMAIL = "admin@qicard.com";
const ADMIN_PASSWORD = "123456";

// login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    res.status(200).json({ message: "Login successful" });
    return;
  }
  res.status(401).json({ message: "Invalid credentials" });
  return;
});

// start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
