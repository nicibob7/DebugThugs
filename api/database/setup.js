require("dotenv").config();

const { MongoClient } = require("mongodb");

// const connect_url = process.env.DB_CONNECT (for remote database, replace in the .env)

//  local connection url
const connect_url = process.env.DB_URL
// const connect_url = "mongodb://127.0.0.1:27017/debug_thugs_db"
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



// require('dotenv').config()

// const { MongoClient } = require('mongodb')
// const connectionUrl = process.env.DB_URL;

// // const client = new MongoClient(connectionUrl)

// const dbName = "revision_app"

// const init = async () => {
//   let client = await MongoClient.connect(connectionUrl)
//   console.log('connected to database!', dbName)
//   return client.db(dbName)
// }

// module.exports = { init };