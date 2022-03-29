const {Router} = require("express");
const {authController} = require("../controllers");

const api = Router();

api.post("/signup", authController.signUp);
api.post("/signin", authController.signIn);
api.post("/signout", authController.signOut);

module.exports = api;