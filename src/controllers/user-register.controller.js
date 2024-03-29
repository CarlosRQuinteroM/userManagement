const randonString = require("#Lib/randString.js");
const sendValidationEmail = require("#Lib/nodeMailer.js");
const UserModel = require("#Schemas/user.schema.js");
const { hash } = require("bcrypt");

const userRegisterController = async (req, res) => {
    const { _id, name, surname, email, password } = req.body;

    const existingUserById = await UserModel.findById(_id).exec();

    if (existingUserById) return res.status(409).send({ errors: ['There is already a user with that registered id'] });
    ;

    const existingUserByEmail = await UserModel.findOne({ email }).exec();

    if (existingUserByEmail) return res.status(409).send({ errors: ['There is already a user with that registered email'] });

    const hashedPassword = await hash(password, 10);

    const isValid = false;
    const validationString = randonString()

    const user = new UserModel({
        _id,
        name,
        surname,
        email,
        password: hashedPassword,
        isValid,
        validationString,
    })

    await user.save()
    sendValidationEmail(email, validationString);
    return res.status(201).send('Successfully registered user')
}

module.exports = userRegisterController;  