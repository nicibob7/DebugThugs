const { v4: uuidv4 } = require('uuid');
const client = require('../database/setup');

// const db = require("../database/connect")

class Token {
    constructor({ _id, user_id, token }) {
        this.id = _id;
        this.user_id = user_id;
        this.token = token;
    }

    static async create(user_id) {
        const token = uuidv4();
        const response = await client.db('revision_app').collection('tokens').insertOne({
            user_id: user_id,
            token: token,
        });
        const newToken = await Token.getOneByToken(token);
        return newToken;
    }

    static async getOneById(id) {
        // const response
        return 0;
    }

    static async getOneByToken(token) {
        const response = await client
            .db('revision_app')
            .collection('tokens')
            .find({ token: token });
        const value = await response.toArray();
        const tokenObj = new Token(value[0]);
        return tokenObj;
    }

    static async destroy(data) {
        await client.connect()
        const token = data.token
        const response = await client.db('revision_app').collection('tokens').deleteOne({
            token: token
        })
        return 'Token deleted'
    }
}

module.exports = Token;
