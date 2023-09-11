const { v4: uuidv4 } = require("uuid")

// const db = require("../database/connect")

class Token {
    constructor({ token_id, user_id, token}){
        this.token_id = token_id
        this.user_id = user_id
        this.token = token
    }

    static async create (user_id){
        const token = uuidv4()
        // const response
        // const newID
        return 0
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