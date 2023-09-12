const express = require('express');
const cors = require('cors')

const logger = require('./logger');
const userRouter = require('./routers/users')
const TTRoutes = require("./routers/TTRoutes")
const api = express();

api.use(cors());
api.use(express.json());
api.use(logger);

api.get("/", (req, res) => {
    res.send("this is the Timetable API")
})

api.use("/users", userRouter)
api.use("/timetable", TTRoutes)



module.exports = api
