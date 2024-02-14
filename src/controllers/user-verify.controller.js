const UserModel = require("#Schemas/user.schema.js");

const userVerifyController = async (req, res) => {
    const { validationString } = req.params;
    console.log(validationString);

    const user = await UserModel.findOne({ validationString: validationString });

    if (user) {
        user.isValid = true;
        await user.save();

        res.redirect("/user/login");
    } else {
        res.json('User not found');
    }
};

module.exports = userVerifyController;