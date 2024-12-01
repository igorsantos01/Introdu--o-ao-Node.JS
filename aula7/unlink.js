const fs = require("node:fs");
const error = (error) => {
  if (error) {
    console.log("Não foi possível escrever no arquivo", error.message);
    return;
  }
  console.log("Arquivo excluído com sucesso!");
};

fs.unlink("./arquivo.csv", error);
