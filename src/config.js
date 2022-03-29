require('dotenv').config()

module.exports = {
    PORT: Number(process.env.PORT) || 3001,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES: process.env.JWT_EXPIRES,
    API_VERSION: process.env.API_VERSION,
    BCRYPT_SALT: Number(process.env.BCRYPT_SALT),
    ROLES: {
        admin: 'ADMIN', member: 'MEMBER', client: 'CLIENT',
    }
};
