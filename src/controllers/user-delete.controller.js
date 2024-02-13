const UserModel = require("#Schemas/user.schema.js");
const { compare } = require('bcrypt');

const userDeleteController = async (req, res) => {
    const { id } = req;
    const { password } = req.body;

    const existingUserById = await UserModel.findById(id).exec();

    if (!existingUserById) return res.status(401).send({ errors: ['Unauthorized user'] });

    const checkPassword = await compare(password, existingUserById.password);
    if (!checkPassword) return res.status(401).send({ errors: ['Incorrect credentials'] });

    await existingUserById.delete();

    return res.send('Delete user');

};

module.exports = userDeleteController;  