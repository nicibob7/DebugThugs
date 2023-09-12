const { Router } = require('express')
const TTController = require('../controllers/timetable')

const TTRouter = Router()

TTRouter.get("/", TTController.index)
TTRouter.post("/", TTController.create)
// TTRouter.delete("/entries", TTController.destroy)

module.exports = TTRouter