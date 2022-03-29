const {PrismaClient} = require('@prisma/client')

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

};

const destroy = async (req, res) => {

};

module.exports = {
    show,
    showById,
    update,
    destroy,
};
