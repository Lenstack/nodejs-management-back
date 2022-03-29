const jwt = require("jsonwebtoken")
const config = require("../config")

const createToken = (user) => {
    const payload = {
        sub: user.id,
        role: user.role
    }
    return jwt.sign(payload, config.JWT_SECRET, {expiresIn: config.JWT_EXPIRES}, null)
}

const decodeToken = (token) => {
    return new Promise((resolve, reject) => {
        try {
            const payload = jwt.verify(token, config.JWT_SECRET, {}, (err, decoded) => {
                if (err) {
                    if (err.message === "jwt malformed") {
                        reject({
                            status: 500,
                            message: 'Token is malformed'
                        })
                    }

                    if (err.message === "invalid token") {
                        reject({
                            status: 500,
                            message: 'Token is not valid'
                        })
                    }

                    if (err.message === "jwt expired") {
                        reject({
                            status: 401,
                            message: 'Token has been expired'
                        })
                    }
                }
                return decoded
            })

            resolve(payload.sub)

        } catch (err) {
            reject({
                status: 500,
                message: 'Token is not valid'
            })
        }
    })
}

const refreshToken = () => {

}

module.exports = {
    createToken,
    decodeToken,
    refreshToken
};
