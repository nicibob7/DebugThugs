const { Router } = require('express');
const userController = require('../controllers/user');

const userRouter = Router();

userRouter.get('/', userController.index);
userRouter.get('/authenticate', userController.getUserByToken);
userRouter.patch('/', userController.addTask);
userRouter.get('/:id', userController.show);
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.delete('/logout', userController.logout)

module.exports = userRouter;
