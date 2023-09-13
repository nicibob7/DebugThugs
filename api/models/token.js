const { v4: uuidv4 } = require("uuid")

// const db = require("../database/connect")

class Token {
    constructor({ _id, user_id, token }){
        this.id = _id
        this.user_id = user_id
        this.token = token
    }

    static async create (user_id){
        const token = uuidv4()
        const response = await client.db("revision_app").collection('tokens').insertOne({
            user_id: user_id,
            token: token
        })
        console.log(response)
        const newToken = await Token.getOneByToken(token)
        return newToken
    }

    static async getOneById(id) {
        // const response
        return 0
    }

    static async getOneByToken(token) {
        // const response
        return 0
    }

}

module.exports = Token