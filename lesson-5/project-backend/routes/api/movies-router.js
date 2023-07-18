import express from "express";

import {moviesController} from "../../controllers/index.js";

import {validateBody} from "../../decorators/index.js";

import {isEmptyBody} from "../../middlewares/index.js";

import moviesSchemas from "../../schemas/movies-schemas.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", moviesController.getById);

moviesRouter.post("/", isEmptyBody, validateBody(moviesSchemas.movieAddSchema), moviesController.add);

moviesRouter.put("/:id", isEmptyBody, validateBody(moviesSchemas.movieAddSchema), moviesController.updateById);

moviesRouter.delete("/:id", moviesController.deleteById);

export default moviesRouter;