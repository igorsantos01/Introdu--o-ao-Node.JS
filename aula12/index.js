const fs = require("node:fs");

//const streamLeitura = fs.createReadStream("archive.txt");
const streamLeitura = fs.createReadStream("download.jpg");
const buffer = [];

streamLeitura.on("data", (chunk) => {
  console.log("Chunk criado!");
  buffer.push(chunk);
  console.log(chunk);
});

streamLeitura.on("end", () => {
  console.log(`Buffer:
    ${buffer}`);
});
