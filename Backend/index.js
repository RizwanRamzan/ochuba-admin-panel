const express = require('express')
const connectToMongo = require('./config/db')
const cors = require("cors");

connectToMongo()

const app = express()
app.use(express.json())
app.use(cors());

const PORT = 5000


// Available Routes
app.use('/api/v1/auth', require('./routes/admin/auth'))


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})