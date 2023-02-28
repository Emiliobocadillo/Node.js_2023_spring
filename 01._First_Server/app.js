// import
const express = require("express");
// instantiate
const app = express();

app.use(express.json());


// HTTP method
// The "/" is the endpoint
// after the comma in the parameters is a call back function
app.get("/", (req, res)=>{
    res.send({message: "Our first route"});

});

let bicycleSpins = 0;

app.get("/spinthebicycle", (req, res) =>{
    bicycleSpins+=1;
    res.send({message: `People have spun the bicycle wheel ${bicycleSpins} times`});

});

let dinosaurKicks = 0;
app.get("/kickthedinosaur", (req, res) => {
  dinosaurKicks += 1;
  res.send({
    message: `People have kicked the dinosaur ${dinosaurKicks} times`,
  });
});


app.get("/about", (req, res) => {
    res.send(`<h1> NOT About <h1/>`)
});

// Path varialbe and query string??
// /bat?adjective=spooky

app.get("/bat", (req, res) => {
    console.log(req.query);

    res.send({message: `The bat is ${req.query.adjective}.`});
});

// Path varialbe and query string??
// /bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params);
    res.send({bottleSize: req.params.bottleSize});
});

app.post("/package", (req, res) => {
    console.log(req.body)
    res.send({message: req.body});
});

app.get("/time/time",(req, res) => {
    res.send({
        timeUTC: new Date(),
        timeLocal: Date(),
        unixTimeStamp: Date.now()
    });
})

app.get("/time/day",(req, res) => {
    res.send({
        timeUTC: new Date().getDay(),
        timeLocal: Date().getDay(),
        unixTimeStamp: Date.now().getDay()
    });
})

app.get("/time/month",(req, res) => {
    res.send({
        timeUTC: new Date().getMonth(),
        timeLocal: Date().getMonth(),
        unixTimeStamp: Date.now().getMonth()
    });
})




app.listen(8080);
