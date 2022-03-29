require('dotenv').config()

module.exports = {
    PORT: Number(process.env.PORT) || 3001,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES: process.env.JWT_EXPIRES,
    API_VERSION: process.env.API_VERSION,
    ROLES: ["CLIENT", "ADMIN", "MEMBER"]
};
