import express from "express";

import moviesRouter from "./routes/api/movies-router.js";

const app = express();

app.use("/api/movies", moviesRouter);

app.listen(3000, () => "Server running on 3000 PORT");