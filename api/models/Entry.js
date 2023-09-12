const client = require('../database/setup');
const { ObjectId } = require("mongodb");

class Entry {
    constructor(data) {
        this.id = data.id
        this.date = data.date
        this.content = data.content
    }

    static async getAll() {
        await client.connect()
        const response = await client.db("revision_app").collection("entries").find({})
        const allValues = await response.toArray()
        return allValues;
    }

    static async create({date, content}) {
        try {
            await client.connect()
            const response = await client.db("revision_app").collection("entries").insertOne({
                date: date,
                content: content
            })
            return "Entry created"
        } catch (error) {
            
        }
    }
}

module.exports = Entry
