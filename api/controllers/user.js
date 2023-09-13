const bcrypt = require('bcryptjs');

const Token = require('../models/token')
const User = require('../models/User');

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

    const register = async (req, res) => {
        const data = req.body
        try {
            // generate salt with a specific cost, salt amount found in .env
            const salt = bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));

            // hash the password
            data["password"] = bcrypt.hash(data["password"], salt);

            //password has been stored as encrypted when creating user and sent to DB
            const result = await User.create(data)
            
            res.status(201).send(result)
        } catch(err) {
            res.status(403).json({
                error: err.message,
            })
        }
    }

    const login = async (req, res) => {
        const data = req.body
        try {
            const user = await User.getByUser(data.email)
            const authenticated = await bcrypt.compare(data.password, user["password"]);
            if(!authenticated) {
                throw new Error("incorrect credentials.");
            } else {
                const token = await Token.create(user._id)
                res.status(200).json({ authenticated: true, token: token });
            }
        } catch(err) {
            res.status(403).json({ 
                error: err.message 
            })
        }
    }


module.exports = { index, show, register, login }