const {Router} = require("express");
const {userController} = require("../controllers");
const {authMiddleware} = require("../middlewares");

const api = Router();

api.get("/", authMiddleware.checkAuthenticated, userController.show);
api.get("/:id", authMiddleware.checkAuthenticated, userController.showById);
api.put("/:id", authMiddleware.checkAuthenticated, userController.update);
api.delete("/:id", authMiddleware.checkAuthenticated, userController.destroy);

module.exports = api;