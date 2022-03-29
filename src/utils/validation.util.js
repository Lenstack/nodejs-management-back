const joi = require('joi')

const validateSignUp =  (data) => {
    return joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required()
    }).validate(data)
}

module.exports = {
    validateSignUp
}