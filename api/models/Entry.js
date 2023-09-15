const client = require('../database/setup');
const { ObjectId } = require("mongodb");

class Entry {
    constructor(data) {
        this.id = data.id
        this.weekNum = data.weekNum
        this.name = data.name
        this.day = data.day
        this.time = data.time
        this.content = data.content
    }

    static async getAll() {
        await client.connect()
        const response = await client.db("revision_app").collection("entries").find({})
        const allValues = await response.toArray()
        return allValues;
    }

    static async getById(idx) {
        await client.connect()
        const id = new ObjectId(idx)
        const response = await client.db("revision_app").collection("entries").find({
            _id: id,
        })
        const value = await response.toArray()
        const entry = new Entry(value[0])
        entry["id"] = id
        return entry
    }

    static async create({weekNum, day, time, content}) {
        try {
            await client.connect()
            const response = await client.db("revision_app").collection("entries").insertOne({
                weekNum: weekNum,
                day: day,
                time: time,
                content: content
            })
            return response
        } catch (error) {
            
        }
    }

    async destroy(id) {
        try {
            await client.connect()
            const response = await client.db("revision_app").collection("entries").deleteOne({
                id: id
            })
            return response
        } catch (error) {
            console.log("Failed to delete")
        }
    }
}

module.exports = Entry
