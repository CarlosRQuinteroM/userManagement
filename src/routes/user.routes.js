const userLoginController = require('#Controllers/user-login.controller.js');
const userRegisterController = require('#Controllers/user-register.controller.js');
const userDeleteDTO = require('#Dto/user-delete.dto.js');
const userUpdatePasswordDTO = require('#Dto/user-update-password.dto.js');
const UserUpdateEmailDTO = require('#Dto/user-update-email.dto.js');
const userUpdateDataDTO = require('#Dto/user-update-data.dto.js');
const userLoginDTO = require('#Dto/user-login.dto.js');
const userRegisterDTO = require('#Dto/user-register.dto.js');
const { Router } = require('express')

const userRouter = Router();

userRouter.post('/register', userRegisterDTO, userRegisterController)
userRouter.post('/login', userLoginDTO, userLoginController);

// userRouter.get('/profile', userJWTDTO, userProfileController);
// userRouter.patch('/update-data/:id', userJWTDTO, userUpdateDataDTO, userUpdateDataController);
// userRouter.patch('/update-email/:id', userJWTDTO, UserUpdateEmailDTO, userUpdateEmailController);
// userRouter.patch('/update-password/:id', userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController);
// userRouter.delete('/delete', userJWTDTO, userDeleteDTO, userDeleteController);

module.exports = userRouter;