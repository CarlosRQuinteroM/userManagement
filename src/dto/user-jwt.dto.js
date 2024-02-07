const { jwtVerify } = require('jose')
require('#Config/env.js')

const userJWTDTO = async (req, res, next) => {
    const authorization = req.headers;
    if (!authorization) return res.status(400).send('Unauthorized user');
    try {
        const enconder = new TextEncoder()
        const { payload } = await jwtVerify(authorization, enconder.encode(process.env.JWT_PRIVATE_KEY))
        req.id = payload.id;

        
        next();
    } catch (error) {
        res.status(401).send('Unauthorized user');
    }

}

module.exports = userJWTDTO