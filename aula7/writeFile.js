const fs = require("node:fs");

const content = `Texto 1, Texto 2, Texto 3, Texto 4`;
const filePath = "./arquivo.txt";
const error = (error) => {
  if (error) {
    console.log("Não foi possível escrever no arquivo", error.message);
    return;
  }
  console.log("Arquivo criado com sucesso!");
};

fs.writeFile(filePath, content, error);
