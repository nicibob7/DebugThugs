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
        const response = await client.db("revision_app").collection("users").find({
            _id: id,
        })
        const value = await response.toArray()
        const user = new User(value[0])
        user['id'] = id
        return user
    }

    static async getByUser(email) {
        await client.connect();
        const response = await client.db("revision_app").collection("users").find({
            email: email
        })
        const value = await response.toArray()
        const user = new User(value[0])
        return user
    }

    static async create({ name, email, password }) {
        await client.connect();
        const response = await client.db("revision_app").collection("users").insertOne({
            name: name,
            email: email,
            password: password
        })
        return "User created"
    }

    static async addTask({email, date, description}) {
        console.log(email, date, description)
        try{
            await client.connect()
            const response = await client.db("revision_app").collection("users").find({
                email: email
            })
            const value = await response.toArray()
            if(!value[0].tasks){
                value[0].tasks = []
            }
            const task = value[0].tasks
            const response2 = await client.db("revision_app").collection("users").updateOne(
                {email: email},
                {
                    $set: { tasks: [...task, {date: date, description: description}] }
                }
            )
            if(response2.modifiedCount === 1){
                return "Updated!"
            }
            else{
                throw new Error("Update failed")
            }
        }
        catch(err){
            return ({ err: err.message })
        }
    }
}

module.exports = User