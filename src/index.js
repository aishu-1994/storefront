const express = require("express");
const app = express();
const port = 3000;
const { Pool } = require("pg");
const courseRouter = require("./src/routs/courses");
const { getAllCourses } = require("./src/handler/courses");

const cors = require("cors");

// Middleware to parse JSON
app.use(express.json());
app.use(cors({ origin: true }));
// app.use("/", () => courseRouter);

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "123456",
  database: "coursedetails",
  port: "5432",
});

pool.connect(function (err, _, done) {
  if (err) {
    console.log(err.message);
  }
  done();
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});

app.get("/", async (_req, res) => {
  const query = await pool.query("SELECT * FROM courses");

  const courses = query.rows;
  console.log("GET ");
  res.send({ courseData: courses });
});

app.post("/cart/:id", async (req, res) => {
  const { quantity, status } = req.body ?? {};
  console.log(quantity, status);
  const query =
    await pool.query(`INSERT INTO cart (courses_id, quantity, status)
VALUES (${req.params.id}, ${quantity}, '${status}');`);

  res.send({ data: {} });
});

app.get("/cartdata/", async (_req, res) => {
  const query = await pool.query("SELECT * FROM cart");

  const cart = query.rows;
  console.log("GET ");
  res.send({ cartData: cart });
});

// app.delete("/cartdata", async (_req, res) => {
//   const query = await pool.query("SELECT * FROM cart");

//   const cart = query.rows;
//   console.log("GET ");
//   res.send({ cartData: cart });
// });

//{ quantity:22, active:'active' }
