import express from "express";
import moment from "moment";
import fs from "fs/promises";
import cors from "cors";

import movies from "./movies.js";

const app = express();

// const corsMiddleware = cors();
/*
const cors = ()=> {
    return (req, res, next)=> {
        // headers manipulate
        next();
    }
}
*/
// app.use(corsMiddleware);
app.use(cors())

// app.use(async(req, res, next)=> {
//     const {method, url} = req;
//     const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//     await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
//     next();
// })

// app.use((req, res, next)=> {
//     console.log("First middleware");
//     next();
// })

// app.use((req, res, next)=> {
//     console.log("Second middleware");
//     next();
// })

app.get("/products", (req, res)=> {
    res.json([]);
})

app.get("/movies", (req, res)=> {
    res.json(movies);
})

app.use((req, res)=> {
    res.status(404).json({
        message: "Not found"
    })
})

app.listen(3000, ()=> console.log("Server running on 3000 PORT"));

