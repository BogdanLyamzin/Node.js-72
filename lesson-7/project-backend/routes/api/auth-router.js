import express from "express";

import authController from "../../controllers/auth-controller.js";

import usersSchemas from "../../schemas/users-schemas.js";

import {validateBody} from "../../decorators/index.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(usersSchemas.userSignupSchema), authController.signup);

authRouter.post("/signin", validateBody(usersSchemas.userSigninSchema), authController.signin);

export default authRouter;