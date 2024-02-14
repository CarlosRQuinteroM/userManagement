const { Type } = require('@sinclair/typebox');


const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'Invalid type',
        format: 'Invalid format ',
    }
});
const nameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'Name must be at least 2 characters',
        maxLength: 'Name must have a maximum of 20 characters'
    }
});
const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'Surname must be at least 4 characters',
        maxLength: 'Surname must have a maximum of 50 characters'
    }
});
const emailDTOSchema = Type.String({
    format: "email",
    errorMessage: {
        type: 'Invalid email type',
        format: 'Invalid email format (RFC 5322)'
    }
});
const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'Invalid password type',
        format: 'Invalid password format,must have at least one uppercase letter, one lowercase letter, and one number',
        minLength: 'Password must be at least 10 characters',
        maxLength: 'Password must have a maximum of 25 characters'
    }
});

module.exports = { idDTOSchema, nameDTOSchema, surnameDTOSchema, emailDTOSchema, passwordDTOSchema }