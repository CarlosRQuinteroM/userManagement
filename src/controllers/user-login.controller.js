const UserModel = require("#Schemas/user.schema.js");
const { compare } = require("bcrypt");
const { SignJWT } = require('jose')

const userLoginController = async (req, res) => {
    const { email, password } = req.body;

    const existingUserByEmail = await UserModel.findOne({ email }).exec();

    if (!existingUserByEmail) return res.status(401).send({ errors: ['Incorrect credentials'] });

    const checkPassword = await compare(password, existingUserByEmail.password);

    if (!checkPassword) return res.status(401).send({ errors: ['Incorrect credentials'] });

    // Check if the user Email is Validate.
    if (!existingUserByEmail.isValid) return res.send({ errors: ['User it`s no validate'] });

    const jwtConstructor = new SignJWT({ _id: existingUserByEmail._id });
    const encoder = new TextEncoder()
    const jwt = await jwtConstructor
        .setProtectedHeader({ alg: 'HS256', type: 'JWT' })
        .setIssuedAt().setExpirationTime('7d')
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    return res.send({ jwt })
}

module.exports = userLoginController;  