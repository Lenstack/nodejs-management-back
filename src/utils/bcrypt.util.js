const bcrypt = require("bcrypt")
const config = require("../config")

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(config.BCRYPT_SALT);
    return await bcrypt.hash(password, salt)
};

const compareHashedPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
    hashPassword,
    compareHashedPassword
}