const { expressjwt: expressJwt } = require('express-jwt');
// var jwt = require('express-jwt');
const jwkrsRsa = require ("jwks-rsa");
require('dotenv').config()


const authorizeAccesToken = expressJwt({
    secret: jwkrsRsa.expressJwtSecret({
        cache:true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: process.env.AUDIENCE,
    issuer: process.env.ISSUER,
    algorithms: ['RS256']
});

module.exports = authorizeAccesToken
