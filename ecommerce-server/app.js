const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')
const router = require('./routers')
const port = process.env.PORT || 3001


mongoose.connect("mongodb://localhost:27017/next-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.use(cors())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.use(router)
    app.listen( port, () => {
        console.log(`E-commerce Service started @ ${port}`)
    })
})
