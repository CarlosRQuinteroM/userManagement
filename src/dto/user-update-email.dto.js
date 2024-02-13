const { emailDTOSchema, passwordDTOSchema, } = require('#Lib/dto-types.js')
const { Type } = require('@sinclair/typebox');
const Ajv = require('ajv').default;
const addFormats = require('ajv-formats');
const addErrors = require('ajv-errors');


const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;

const UpdateEmailDTOSchema = Type.Object({
    email: emailDTOSchema,
    password: passwordDTOSchema,
}, {
    additionalProperties: false,
    errorMessage: {
        additionalProperties: "No valid format."
    }
})

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');

ajv.addFormat('password', {
    validate: (value) => passwordRegex.test(value),
    errors: true,
});

addFormats(ajv, ['email']);
addErrors(ajv);

const validateSchema = ajv.compile(UpdateEmailDTOSchema);

const UserUpdateEmailDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });

    next();
};



module.exports = UserUpdateEmailDTO;