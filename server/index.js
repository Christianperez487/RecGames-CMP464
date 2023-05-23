const express = require("express")

const PORT = process.env.PORT || 8001

const app = express()

const path = require('path')

const db = require('./queries')

const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (req, res) => {
    res.json("Hello Citizen, are you from Apple World?")
});

app.get("/api", (req, res) => {
    res.json({ message: "Greetings from Apple World" })
});



app.get('/gamer', db.getGamer)
app.get('/gamer/:id', db.getGamerById)
app.post('/gamer', db.createGamer)
app.put('/gamer/:id', db.updateGamer)
app.delete('/gamer/:id', db.deleteGamer)


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
});
