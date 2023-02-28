// import express framework
const express = require("express");
// instantiate
const app = express();

// passes the body as JSON
app.use(express.json());

let birds = [
  { id: 1, species: "Seagull", primaryColor: "White" },
  { id: 2, species: "Raven", primaryColor: "Black" },
  { id: 3, species: "Flamingo", primaryColor: "Pink" },
];

// GET METHOD TO RETRIEVE ALL BIRDS
app.get("/birds", (req, res) => {
  res.send({ data: birds });
});

// GET METHOD TO RETRIVE A SPECIFIC BIRD BY ID
app.get("/birds/:id", (req, res) => {
  const bird = birds.find((bird) => bird.id === parseInt(req.params.id));
  if (!bird) {
    res.status(404).send(`No bird with id "${req.params.id}" was found`);
  } else {
    res.send({ data: bird });
  }
});

// POST METHOD TO CREATE A BIRD
let birdId = 0;

app.post("/birds", (req, res) => {
  birdId += 1;
  const bird = req.body;
  const birdWithId = { ...bird, id: birdId };
  birds.push(birdWithId);
  res.send(`The ${bird.species} was added to the database`);
});

// PATCH METHOD TO UPDATE A SPECIFIC BIRD BY ID
app.patch("/birds/:id", (req, res) => {
  const id = req.params.id;
  const { species, primaryColor } = req.body;
  const bird = birds.find((bird) => bird.id === parseInt(id));
  if (!bird) {
    res.status(404).send(`No bird with id "${id}" was found`);
  } else {
    if (species) bird.species = species;
    if (primaryColor) bird.primaryColor = primaryColor;
    res.send(`The bird with id "${id}" was succesfully updated`);
  }
});

// DELETE METHOD TO DELETE A SPECIFIC BIRD BY ID
app.delete("/birds/:id", (req, res) => {
  const id = req.params.id;
  const bird = birds.find((bird) => bird.id === parseInt(req.params.id));
  if (!bird) {
    res.status(404).send(`No bird with id "${req.params.id}" was found`);
  } else {
    birds = birds.filter((bird) => bird.id != id);
    res.send(
      `The ${bird.species} with id "${id}" was succesfully deleted from the database`
    );
  }
});

app.listen(8080, () => {
  console.log("Server is running on port", 8080);
});
