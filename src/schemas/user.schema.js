const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String, required: true, minLength: 2, maxLength: 20
    },
    surName: {
        type: String, required: true, minLength: 4, maxLength: 50
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    avatar: {
        type: String, required: false
    }
})

const userModel = model("User", userSchema);

module.export = userModel;