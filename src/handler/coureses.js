const getAllCourses = async (_req, res) => {
  const query = await pool.query("SELECT * FROM courses");

  const courses = query.rows;

  res.send({ data: courses });
};

module.exports = { getAllCourses };
