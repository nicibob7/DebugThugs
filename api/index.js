require('dotenv').config()

const api = require('./api')
const port = process.env.PORT || 5001;


api.listen(port, () => {
    console.log('API running on port', port)
})
