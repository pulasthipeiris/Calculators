const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){

    var num1 = Number (req.body.n1); 
    var num2 = Number (req.body.n2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
})

app.get('/bmiCalculator', function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
    
    var w = parseFloat (req.body.weight); 
    var h = parseFloat (req.body.height);

    var result = Number(w/(Math.pow(h, 2)));

    res.send("Your BMI is " + result);
})

app.listen(port, function(){
    console.log("Server started at port 3000");
})