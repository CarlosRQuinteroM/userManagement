const { jwtVerify } = require('jose')

const userJWTDTO = async (req, res, next) => {
    const { authorization } = req.headers;


    if (!authorization)
        return res.status(401).send({ errors: ['Usuario no autorizado'] });
    const token = authorization.split(' ')[1];

    try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );

        req.id = payload._id;

        next();
    } catch (error) {
        return res.status(401).send({ errors: ['Usuario no autorizado'] });
    }
};

module.exports = userJWTDTO;