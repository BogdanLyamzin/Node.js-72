// import fs from "fs";
import fs from "fs/promises";

const func = async()=> {
    const filePath = "./files/file.txt";
    // const buffer = await fs.readFile((filePath));
    // console.log(buffer);
    // const text = buffer.toString();
    // console.log(text);
    try {
        // const data = await fs.readFile(filePath, "utf-8");
        // console.log(data);
        // await fs.appendFile(filePath, "\nPython forever");
        // await fs.writeFile(filePath, "Rust better then C");
        // await fs.appendFile("./files/file2.txt", "\nPython forever");
        // await fs.writeFile("./files/file3.txt", "Rust better then C");
        // await fs.unlink("./files/file3.txt");
    }
    catch(error) {
        console.log(error.message);
        throw error;
    }
}

func();

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// fs.readFile("./files/file.txt", (error, data)=> {
//     console.log(error);
//     console.log(data);
// })