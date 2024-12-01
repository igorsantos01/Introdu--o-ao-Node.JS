import fs from "node:fs";

export const createFile = (text) => {
  const filePath = "./meuarquivo";
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, text, (error) => {
      if (error) {
        reject("Não foi possível criar o arquivo", error.message);
      } else {
        console.log("Arquivo criado com sucesso!");
        resolve();
      }
    });
  });
};
