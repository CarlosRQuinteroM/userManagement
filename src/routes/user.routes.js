const { Router } = require('express')

const userRouter = Router();

userRouter.get('/profile');
userRouter.post('/register');
userRouter.post('/login');
userRouter.patch('/update-data/:id');
userRouter.patch('/update-email/:id');
userRouter.patch('/update-password/:id');
userRouter.delete('/delete');

module.exports = userRouter;