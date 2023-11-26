const express = require("express");
const authRouter = express.Router();

const ctrl = require("../../controllers/auth");
const validateBody = require("../../middlewares/validateBody");
const authenticate = require("../../middlewares/authenticate");
const { authUserSchema } = require("../../models/user");

authRouter.post("/register", validateBody(authUserSchema), ctrl.register);

authRouter.post("/login", validateBody(authUserSchema), ctrl.login);

authRouter.post("/logout", authenticate, ctrl.logout);

authRouter.get("/current", authenticate, ctrl.getCurrent);

module.exports = authRouter;
