require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5010;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");
const usersHandlers = require("./usersHandlers");



app.get("/api/movies", movieHandlers.getMovies);
app.post("/api/movies", movieHandlers.postMovie);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.put("/api/movies/:id", movieHandlers.updateMovie);
app.delete("/api/movies/:id", movieHandlers.deleteMovie);
app.get("/api/users", usersHandlers.getUsers);
app.post("/api/users", usersHandlers.postUsers);
app.get("/api/users/:id", usersHandlers.getUsersById);
app.put("/api/users/:id", usersHandlers.updateUsers);
app.delete("/api/users/:id", usersHandlers.deleteUser);


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
