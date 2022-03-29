const {jwtUtil} = require("../utils")

const checkAuthenticated = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({message: 'Token not found'})
    }

    const token = req.headers.authorization.split(' ')[1]

    jwtUtil.decodeToken(token).then(response => {
        req.user = response
        next()
    }).catch((error) => {
        res.status(error.status).send({message: error.message})
    })
};

const checkAuthorized = (req, res, next) => {

}

module.exports = {
    checkAuthenticated,
    checkAuthorized
}

