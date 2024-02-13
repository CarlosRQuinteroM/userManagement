const { passwordDTOSchema } = require('#Lib/dto-types.js')
const { Type } = require('@sinclair/typebox');
const Ajv = require('ajv').default;
const addFormats = require('ajv-formats');
const addErrors = require('ajv-errors');


const UserDeleteDTOSchema = Type.Object({
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

addErrors(ajv);

const validateSchema = ajv.compile(UserDeleteDTOSchema);

const userDeleteDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });

    next();
};



module.exports = userDeleteDTO;