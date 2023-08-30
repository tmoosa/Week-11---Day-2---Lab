const express = require('express');
const app = express();

///////////////////
///GREETINGS//////
//////////////////

app.get('/greeting', (req, res) => {
    res.send("Hello, stranger")
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
})


/////////////////////
///TIP CALCULATOR////
/////////////////////

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = Number(req.params.total);
    const tipPercentage = Number(`0.${req.params.tipPercentage}`);
    const newTotal = total * tipPercentage;

    res.send(`${newTotal}`)
})

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
    const randIdx = Math. floor(Math. random()*20);

    res.send(`<h1>${req.params.question}? ${magic8BallResponses[randIdx]}</h1>`)
})

app.listen(3000, () => console.log('Listening on port 3000'))