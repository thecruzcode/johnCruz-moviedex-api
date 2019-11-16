const express = require("express");
const morgan = require("morgan");
const movies = require("./movies.json");

console.log(process.env.API_TOKEN);

const app = express();

app.use(morgan("dev"));

app.get("/movies", function handleGetMovies(req, res) {
  let response = movies;

  res.json(response); // invoke the json response
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
