const { ObjectId } = require("mongodb");
const client = require('../database/setup');

class User {
    constructor(data) {
        this.id = data.id,
        this.name = data.name,
        this.email = data.email,
        this.password = data.password
    }

    static async getAll() {
        await client.connect();
        const response = await client.db("revision_app").collection("users").find({})
        const allValues = await response.toArray()
        return allValues;
    }

    static async getById(idx) {
        await client.connect();
        const id = new ObjectId(idx)
        console.log(id)
        const response = await client.db("revision_app").collection("users").find({
            _id: id,
        })
        const value = await response.toArray()
        const user = new User(value[0])
        user['id'] = id
        return user
    }
}

module.exports = User