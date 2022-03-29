const {Router} = require("express");
const {userController} = require("../controllers");
const {checkAuthenticated} = require("../middlewares");

const api = Router();

api.get("/", checkAuthenticated, userController.show);
api.get("/:id", checkAuthenticated, userController.showById);
api.put("/:id", checkAuthenticated, userController.update);
api.delete("/:id", checkAuthenticated, userController.destroy);

module.exports = api;