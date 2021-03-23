// const _ = require("underscore");
// const numbers = [4,3,2,1,6,3,3,1,4,7,3];
// console.log(_.uniq(numbers));
const fs = require("fs");
const path = require("path");
// fs.writeFileSync("ReadMe.md", "I'm text from Node.js", (err) => {
//     if(err) throw err;
//     console.log("File is Created/Changed")
// })

// fs.writeFile("ReadMe.txt", "Second text", (err) => {
//     if(err) throw err;
//     console.log("File is Changed")
// })

// fs.rename("ReadMe.md", "Change.txt", (err) => {
//     if (err && err.code == "ENOENT") {
//         console.error("Edpisi fayl chka");
//     }else {
//         console.log("File-i anun@ poxvec");
//     }
// })

// fs.appendFile("Chang.txt", "\n\tAppend file verjic", (err) => {
//     if (err) throw err;
//     console.log("file is changed");
// })

// fs.unlink("Chang.txt", (err) => {
//     if (err && err.code == "ENOENT"){
//         console.error("Edpisi fayl chka");
//     }else {
//         console.log("File-i anun@ poxvec");
//     }
// })

// fs.open("mynewfile", "w", (err, file) => {
//     if (err) throw err;
//     console.log("Saved", file)
// })

// fs.readFile("Change.txt", (err,data) => {
//     if (err) throw err;
//     console.log(data.toString())
// })

// fs.unlink("Change.txt", (err) => {
//         if (err && err.code == "ENOENT"){
//             console.error("Edpisi fayl chka");
//         }else {
//             console.log("File-i anun@ poxvec");
//         }
//     })
// fili tex@ u anun@
// console.log(`${__dirname}/`);
// console.log(__filename);

// fs.readFile(path.join(__dirname, "mynewfile.json"), (err,data) => {
//     if (err) throw err;
//     let arr = data.toString(); //to string
//     arr = JSON.parse(arr);  // to object
//     console.log(arr.name);
// })

// fs.mkdir(path.join(__dirname, "Karen"), (err) => {
//         if (err && err.code == "EEXIST") throw err;
//         console.log("Folder is created");
//     })

// fs.rmdir("Karen", (err) => {
//     if (err && err.code == "EEXIST") {
//         console.log("Datark chi")
//     };
//     console.log("Folder is delated");
// })

