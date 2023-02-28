// import
const express = require("express");
// instantiate
const app = express();

import { getAll } from "./API_calls";


// Tanks
const tanks = [
    {name: "Leopard", year: 1940, nation: "Germany"},
    {name: "Tiger", year: 1942, nation: "Germany"},
    {name: "LM53E", year: 1934, nation: "Denmark"},

]

let visitorCount = 0;

// giving access to our static files (security in limiting the files that are accessible)
app.use(express.static("public"));

// __dirname is the working directory of nodeproject
console.log(__dirname)


// Pages

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.get("/tanks", (req, res) => {
  res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get("/visitors", (req, res) => {
  res.sendFile(__dirname + "/public/visitors/visitors.html");
});



// API

app.get("/api/tanks", (req, res) => {
    res.send({data: tanks});
});

app.put("/api/visitors", (req, res) => {
    visitorCount
    res.send({data: tanks});
});






const PORT = 8080;

app.listen(PORT, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT)

});

// falsy values
const falsy = undefined;
if(falsy){
    console.log("================= OH NO =============")
};