const express = require("express");

const app = express();

// giving access to our static files (security in limiting the files that are accessible)
app.use(express.static("public"));

// Route

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/frontpage/frontpage.html")
// });

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/public/frontpage/frontpage.html")
})























const PORT = 8080;


app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Server is running on port", PORT);
});

// Export the express API
module.exports = app;