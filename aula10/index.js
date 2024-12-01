const path = require("node:path");
const newDirectory = "css/style.css";
const pathResolve = path.resolve(newDirectory);
const fileName = path.extname(pathResolve);
console.log(fileName);
