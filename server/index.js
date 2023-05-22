const express = require("express")

const PORT = process.env.PORT || 8001

const app = express()

app.get('/', (req, res) => {
    res.send("Hello Citizen, are you from Apple World?")
});

app.get("/api", (req, res) => {
    res.json({ message: "Greetings from Apple World" })
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
});