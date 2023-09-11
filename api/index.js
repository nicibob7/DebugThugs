// require('dotenv').config()
const db = require("./db")
const app = require('./app')

db.connect().then(() => {
    console.log("Connected to MongoDB: " + db.url)
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('API running on port', port)
})
