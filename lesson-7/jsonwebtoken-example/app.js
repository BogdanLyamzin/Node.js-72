import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    id: "64c00be03c21806cf3399f84",
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
// console.log(token)
const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const {id} = jwt.verify(token, JWT_SECRET);
    // console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzAwYmUwM2MyMTgwNmNmMzM5OWY4NCIsImlhdCI6MTY5MDMwOTY3MCwiZXhwIjoxNjkwMzkyNDcwfQ.ktezHTdHFdThLUHMFXlA31QRjGqRhfgZMxesUrIC2LS";
    jwt.verify(invalidToken, JWT_SECRET)
}
catch(error) {
    console.log(error.message);
}