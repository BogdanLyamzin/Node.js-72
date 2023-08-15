import {Schema, model} from "mongoose";

import { handleSaveError, handleUpdateValidate } from "./hooks.js";

const movieSchema = new Schema({

}, {versionKey: false, timestamps: true});

movieSchema.pre("findOneAndUpdate", handleUpdateValidate);

movieSchema.post("save", handleSaveError);

movieSchema.post("findOneAndUpdate", handleSaveError);

const Movie = model("movie", movieSchema);

export default Movie;