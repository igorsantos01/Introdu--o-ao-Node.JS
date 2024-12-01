const fs = require("node:fs");

const exists = fs.existsSync("arquivo.txt");

console.log(exists);
