const User = require('../models/User')

const index = async (req, res) => {
    try {
        const user = await User.getAll()
        res.status(200).json ({
            "success": true,
            "user": user
        })
    }   catch(err) {
        res.status(500).json({
            "success": false,
            "message": "Users are not available right now",
            "error": err
        })
    }
}

const show = async (req, res) => {
    try {
        const idx = req.params.id
        const user = await User.getById(idx)
        res.status(200).json({
            "success": true,
            "user": user
        })
    } catch(err) {
        res.status(500).json({
        "success": false,
            "message": "Couldn't find user with this ID",
            "error": err
        })
    }
}

module.exports = { index, show }