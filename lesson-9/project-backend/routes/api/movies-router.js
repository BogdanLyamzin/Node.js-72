import express from "express";

import moviesController from "../../controllers/movies-controller.js";

import {validateBody} from "../../decorators/index.js";

import {upload, authenticate, isEmptyBody, isValidId} from "../../middlewares/index.js";

import moviesSchemas from "../../schemas/movies-schemas.js";

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", isValidId, moviesController.getById);

// upload.fields([{name: "poster", maxCount: 1}])
// upload.array("poster", 8)
moviesRouter.post("/", upload.single("poster"), isEmptyBody, validateBody(moviesSchemas.movieAddSchema), moviesController.add);

moviesRouter.put("/:id", isValidId, isEmptyBody, validateBody(moviesSchemas.movieAddSchema), moviesController.updateById);

moviesRouter.patch("/:id/favorite", isValidId, isEmptyBody, validateBody(moviesSchemas.movieUpdateFavoriteSchema), moviesController.updateFavorite);

moviesRouter.delete("/:id", isValidId, moviesController.deleteById);

export default moviesRouter;