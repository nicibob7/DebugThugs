const Entry = require("../models/Entry")

const index = async(req, res) => {
    try {
        const entry = await Entry.getAll()
        res.status(200).send({entry: entry})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}
const create = async(req, res) => {
    try {
        const data = req.body;
        const entry = await Entry.create(data)
        res.status(201).send({data: entry})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

const destroy = async(req, res) => {
    try {
        const id = req.params.id;
        const entry = await Entry.getById(id)
        const result = await entry.destroy()
        res.sendStatus(204)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = {index, create, destroy}
