//CONTROLLERS
const userDeleteController = require('#Controllers/user-delete.controller.js');
const userUpdatePasswordController = require('#Controllers/user-update-password.controller.js');
const userUpdateEmailController = require('#Controllers/user-update-email.controller.js')
const userUpdateDataController = require('#Controllers/user-update-data.controller.js');
const userProfileController = require('#Controllers/user-profile.controller.js');
const userLoginController = require('#Controllers/user-login.controller.js');
const userRegisterController = require('#Controllers/user-register.controller.js');
//DTOs
const userJWTDTO = require('#Dto/user-jwt.dto.js');
const userDeleteDTO = require('#Dto/user-delete.dto.js');
const userUpdatePasswordDTO = require('#Dto/user-update-password.dto.js');
const UserUpdateEmailDTO = require('#Dto/user-update-email.dto.js');
const userUpdateDataDTO = require('#Dto/user-update-data.dto.js');
const userLoginDTO = require('#Dto/user-login.dto.js');
const userRegisterDTO = require('#Dto/user-register.dto.js');
//ROUTER
const { Router } = require('express')

const userRouter = Router();

userRouter.post('/register', userRegisterDTO, userRegisterController)
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/profile', userJWTDTO, userProfileController);
userRouter.patch('/update-data', userJWTDTO, userUpdateDataDTO, userUpdateDataController);
userRouter.patch('/update-email', userJWTDTO, UserUpdateEmailDTO, userUpdateEmailController);
userRouter.patch('/update-password', userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController);
 userRouter.delete('/delete', userJWTDTO, userDeleteDTO, userDeleteController);

module.exports = userRouter;