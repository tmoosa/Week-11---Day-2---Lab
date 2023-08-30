const express = require('express');
const app = express();

///////////////////
///GREETINGS//////
//////////////////

app.get('/greeting', (req, res) => {
    res.send("Hello, stranger");
});

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`);
});

/////////////////////
///TIP CALCULATOR////
/////////////////////

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = Number(req.params.total);
    const tipPercentage = Number(req.params.tipPercentage) / 100;
    const newTotal = (total * tipPercentage).toFixed(2);

    res.send(`Tip: $${newTotal}`);
});

///////////////////
///MAGIC 8 BALL///
//////////////////

app.get('/magic/:question', (req, res) => {
    const magic8BallResponses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "yes definitely",
        "you may rely on it",
        "Outlook good",
        "Yes",
        "No",
        "HAHA No",
        "Ask again later",
    ];
    const randIdx = Math.floor(Math.random() * magic8BallResponses.length);

    res.send(`Question: ${req.params.question}? Answer: ${magic8BallResponses[randIdx]}`);
});

app.listen(3000, () => console.log('Listening on port 3000'));