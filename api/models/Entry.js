const client = require('../database/setup');
const { ObjectId } = require("mongodb");

class Entry {
    constructor(data) {
        this.id = data.id
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

    static async create({content}) {
        const currentDate = new Date();
        const formatting = {
            timeZone: "Europe/London",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        }
        const date = currentDate.toLocaleString("en-GB", formatting)
        try {
            await client.connect()
            const response = await client.db("revision_app").collection("entries").insertOne({
                date: date,
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
