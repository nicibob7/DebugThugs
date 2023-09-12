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
        const item = await Entry.create(data)
        res.status(201).send({data: item})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

const destroy = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {index, create, destroy}
