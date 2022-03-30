const joi = require('joi')

const validateSignUp = (data) => {
    return joi.object({
        name: joi.string().required().min(3),
        email: joi.string().email().required().min(5),
        password: joi.string().required().min(5)
    }).validate(data)
}

const validateSignIn = (data) => {
    return joi.object({
        email: joi.string().email().required().min(5),
        password: joi.string().required().min(5)
    }).validate(data)
}

const validateUserUpdate = (data) => {
    return joi.object({
        name: joi.string().min(3),
        email: joi.string().email().min(5),
        roles: joi.array()
    }).validate(data)
}

module.exports = {
    validateSignUp,
    validateSignIn,
    validateUserUpdate
}