const { emailDTOSchema, idDTOSchema, nameDTOSchema, passwordDTOSchema, surnameDTOSchema, isValidDTOSchema } = require('#Dto/dto-types.js')
const { Type } = require('@sinclair/typebox');
const Ajv = require('ajv').default;
const addFormats = require('ajv-formats');
const addErrors = require('ajv-errors');


const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;

const RegisterDTOSchema = Type.Object({
    _id: idDTOSchema,
    name: nameDTOSchema,
    surname: surnameDTOSchema,
    email: emailDTOSchema,
    password: passwordDTOSchema,
}, {
    additionalProperties: false,
    errorMessage: {
        additionalProperties: "no Valid format."
    }
})

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');

ajv.addFormat('password', {
    validate: (value) => passwordRegex.test(value),
    errors: true,
});

addFormats(ajv, ['email', 'uuid']);
addErrors(ajv);

const validateSchema = ajv.compile(RegisterDTOSchema);

const userRegisterDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });

    next();
};



module.exports = userRegisterDTO;