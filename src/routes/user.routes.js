const userRegisterDTO = require('#Dto/user-register.dto.js');
const { Router } = require('express')

const userRouter = Router();

userRouter.get('/profile');
userRouter.post('/register', userRegisterDTO, async (req, res) => {
    try {
        const newUser = await UserController.register(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
userRouter.post('/login');
userRouter.patch('/update-data/:id');
userRouter.patch('/update-email/:id');
userRouter.patch('/update-password/:id');
userRouter.delete('/delete');

module.exports = userRouter;