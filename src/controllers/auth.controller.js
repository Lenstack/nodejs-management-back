const {PrismaClient} = require('@prisma/client')
const {jwtUtil, validateUtil, bcryptUtil} = require("../utils")

const prisma = new PrismaClient()

const signUp = async (req, res) => {
    const {error} = validateUtil.validateSignUp(req.body)
    if (error) return res.status(400).send({error: error.details[0].message});

    try {
        const {email, password, name} = req.body

        const isMatch = await prisma.user.findUnique({
            where: {
                email: email,
            },
        })

        if (isMatch) {
            return res.status(400).send({error: "Account already been registered"});
        }

        const user = await prisma.user.create({
            data: {
                email: email,
                password: await bcryptUtil.hashPassword(password),
                name: name,
            },
        })
        res.status(201).send({Status: "Created", Authentication: jwtUtil.createToken(user)});
    } catch (err) {
        res.status(500).send({error: err});
    }
};

const signIn = async (req, res) => {
    const {error} = validateUtil.validateSignIn(req.body)
    if (error) return res.status(400).send({error: error.details[0].message});

    try {
        const {email, password} = req.body
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        })

        if (!user) {
            return res.status(404).send({error: "Account not been registered"});
        }

        const isMatch = await bcryptUtil.compareHashedPassword(password, user.password)

        if (!isMatch) {
            return res.status(404).send({error: "Password is incorrect"});
        }

        res.status(200).send({Status: "Success", Authentication: jwtUtil.createToken(user)});
    } catch (err) {
        res.status(500).send({error: err});
    }
};

const signOut = async (req, res) => {
    try {
        res.status(200).send({Status: "Success"});
    } catch (err) {
        res.status(500).send({error: err});
    }
};

const resetPassword = (req, res) => {
    try {
        res.status(200).send({Status: "Success"});
    } catch (err) {
        res.status(500).send({error: err});
    }
}

module.exports = {
    signUp,
    signIn,
    signOut,
    resetPassword
}