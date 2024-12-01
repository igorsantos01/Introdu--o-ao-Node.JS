const fs = require("node:fs");
const error = (error) => {
  if (error) {
    console.log("Não foi possível escrever no arquivo", error.message);
    return;
  }
  console.log("Arquivo renomeado com sucesso!");
};
fs.rename("./arquivo.txt", "./arquivo.csv", error);
