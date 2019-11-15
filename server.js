const express = require("express");
const morgan = require("morgan");
const movies = require("./movies.json");

const app = express();

app.use(morgan("dev"));

app.get("/movies", function handleGetMovie(req, res) {
  let;
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
