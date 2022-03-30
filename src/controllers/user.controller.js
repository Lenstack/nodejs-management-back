const {PrismaClient} = require('@prisma/client')
const {validateUtil} = require("../utils");

const prisma = new PrismaClient()

const show = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {roles: true}
        })
        res.status(200).send({status: "Success", users});
    } catch (err) {
        res.status(500).send({error: err});
    }
};

const showById = async (req, res) => {
    try {
        const {id} = req.params
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        })
        res.status(200).send({status: "Success", user});
    } catch (err) {
        res.status(500).send({error: err});
    }
};

const update = async (req, res) => {
    const {error} = validateUtil.validateUserUpdate(req.body)
    if (error) return res.status(400).send({error: error.details[0].message});

    try {
        const {id} = req.params
        const {name, email} = req.body

        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                email: email
            },
        })
        res.status(200).send({status: "Success", user});
    } catch (err) {
        res.status(500).send({error: err});
    }
};

const destroy = async (req, res) => {
    try {
        const {id} = req.params
        const user = await prisma.user.delete({
            where: {
                id: id,
            }
        })
        res.status(200).send({status: "Success", user});
    } catch (err) {
        res.status(500).send({error: err});
    }
};

module.exports = {
    show,
    showById,
    update,
    destroy,
};
