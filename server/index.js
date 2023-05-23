const express = require("express")

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8001

const app = express()

const db = require('./queries')

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
    res.json("Hello Citizen, are you from Apple World?")
});



app.get('/gamer', db.getGamer)
app.get('/ugamer/:id', db.getGamerById)
app.post('/gamer', db.createGamer)
app.put('/gamer/:id', db.updateGamer)
app.delete('/gamer/:id', db.deleteGamer)


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
});
