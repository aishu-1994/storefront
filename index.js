require("dotenv").config();
const express = require("express");
const app = express();
const { neon } = require("@neondatabase/serverless");
const port = 3000;
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect(function (err, _, done) {
  if (err) {
    console.log(err.message);
  }
  done();
});

const { getAllCourses } = require("./handler/courses");

const cors = require("cors");
const { Query } = require("pg");

// Middleware to parse JSON
app.use(express.json());
app.use(cors({ origin: true }));

// const sql = neon(process.env.DATABASE_URL);

app.listen(3000, () => {
  console.log("listening to port 3000");
});

app.get("/", async (_req, res) => {
  try {
    const query = await pool.query("SELECT * FROM courses");

    const courses = query.rows;
    console.log("GET ");
    res.send({ courseData: courses });
  } catch (e) {
    res.send({ status: "failed", message: e.message });
  }
});

app.post("/cart/:id", async (req, res) => {
  try {
    const { quantity, status } = req.body ?? {};
    console.log(quantity, status);
    const query =
      await pool.query(`INSERT INTO cart (courses_id, quantity, status)
VALUES (${req.params.id}, ${quantity}, '${status}');`);

    res.send({ data: {} });
  } catch (e) {
    res.status(400).send({ status: "failed", message: e.message });
  }
});

app.get("/cartdata/", async (_req, res) => {
  try {
    const query = await pool.query(`SELECT * FROM cart
    left join courses c on cart.courses_id=c.id`);
    const cart = query.rows;
    console.log(query);
    console.log("GET ");
    res.send({ cartData: cart });
  } catch (e) {
    res.send({ status: "failed", message: e.message });
  }
});

// app.delete("/cartdata", async (_req, res) => {
//   try {
//     const query = await sql`SELECT * FROM cart`;

//     const cart = query.rows;
//     console.log("GET ");
//     res.send({ cartData: cart });
//   } catch (e) {
//     res.send({ status: "failed", message: e.message });
//   }
// });

//{ quantity:22, active:'active' }
