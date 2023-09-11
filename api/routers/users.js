const { Router } = require('express');
const userController = require('../controllers/user');

const userRouter = Router();

userRouter.get('/', userController.index)
userRouter.get('/:id', userController.show)


module.exports = userRouter