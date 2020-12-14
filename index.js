const e = require('express')
const express = require('express')
const app = express()
const {authenticate, db} = require('./db')

// databse
authenticate()
db.sync()

app.use("/users", require("./routes/Users"))

app.get("/", (req,res) => {
    res.json({
        status: 200,
        message: "welcome to whatsapp server"
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})