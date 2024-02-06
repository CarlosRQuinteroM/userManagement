const { Type } = require('@sinclair/typebox');
const Ajv = require('ajv').default;
const addFormats = require('ajv-formats');
const addErrors = require('ajv-errors');


const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;

const RegisterDTOSchema = Type.Object({
    _id: Type.String({
        format: 'uuid',
        errorMessage: {
            type: 'Invalid type',
            format: 'Invalid format ',
        }
    }),
    name: Type.String({
        minLength: 2,
        maxLength: 20,
        errorMessage: {
            minLength: 'Name must be at least 2 characters',
            maxLength: 'Name must have a maximum of 20 characters'
        }
    }),
    surname: Type.String({
        minLength: 4,
        maxLength: 50,
        errorMessage: {
            minLength: 'Surname must be at least 4 characters',
            maxLength: 'Surname must have a maximum of 50 characters'
        }
    }),
    email: Type.String({
        format: "email",
        errorMessage: {
            type: 'invalid email type',
            format: 'invalid email format (RFC 5322)'
        }
    }),
    password: Type.String({
        format: 'password',
        minLength: 10,
        maxLength: 25,
        errorMessage: {
            type: 'invalid password type',
            format: 'invalid password format,must have at least one uppercase letter, one lowercase letter, and one number',
            minLength: 'Password must be at least 10 characters',
            maxLength: 'Password must have a maximum of 25 characters'
        }
    }),
})

const ajv = new Ajv({ allErrors: true });
ajv.addFormat('password', {
    validate: (value) => passwordRegex.test(value),
    errors: true,
});

addFormats(ajv, ['email', 'uuid']).addKeyword('kind').addKeyword('modifier');
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