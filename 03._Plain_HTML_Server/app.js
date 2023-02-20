// import
const express = require("express");
// instantiate
const app = express();

// giving access to our static files (security in limiting the files that are accessible)
app.use(express.static("public"));

// __dirname is the working directory of nodeproject
console.log(__dirname)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.get("/tanks", (req, res) => {
  res.sendFile(__dirname + "/public/tanks/tanks.html");
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