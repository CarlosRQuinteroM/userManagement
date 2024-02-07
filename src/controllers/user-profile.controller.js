const UserModel = require("#Schemas/user.schema.js");

const userProfileController = async (req, res) => {
    //console.log(req)
    const { id } = req;

    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById)
        return res.status(401).send({ errors: ['Unauthorized user'] });

    const { _id, name, surname, email } = existingUserById;

    return res.send({ _id, name, surname, email });
};

module.exports = userProfileController;  