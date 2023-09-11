require("dotenv").config();

const { MongoClient } = require("mongodb");

// const connect_url = process.env.DB_CONNECT (for remote database, replace in the .env)

//  local connection url
const connect_url = process.env.DB_CONNECT
console.log(connect_url)

const client = new MongoClient(connect_url)

const connectDB = async () => {
    try {
        await client.connect()
        console.log("Connection successful !")
    } catch(err) {
        console.log(err)
    }
}

connectDB();

module.exports = client;