const UserModel = require("#Schemas/user.schema.js");
const { compare } = require('bcrypt');

const userUpdateEmailController = async (req, res) => {
    const { id } = req;
    const { email, password } = req.body;

    const existingUserById = await UserModel.findById(id).exec();

    if (!existingUserById) return res.status(401).send({ errors: ['Unauthorized user'] });

    const checkPassword = await compare(password, existingUserById.password);
    if (!checkPassword) return res.status(401).send({ errors: ['Credenciales incorrectas'] });

    existingUserById.email = email;

    await existingUserById.save();
    return res.send('Updated email user');

};

module.exports = userUpdateEmailController;  