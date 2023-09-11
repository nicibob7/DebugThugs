const express = require("express")
const cors = require("cors")
const logger = require("morgan")
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())
app.use(logger("dev"))

// const userRoutes = require("./routers/userRouter")


app.get("/", (req,res) => {
    res.json({name:"Shiki"})
})

// app.use("/users",userRoutes)



// mongoose.set("strictQuery",false)
// mongoose.connect("mongodb+srv://admin:secretpassword@lap3.pkplpbk.mongodb.net/appAPI?retryWrites=true&w=majority").then(() => {
//     console.log("Ive connected!")
// }).catch((err) => console.log(err))

module.exports = app