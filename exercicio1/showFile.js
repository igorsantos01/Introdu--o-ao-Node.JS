import fs from "node:fs";

export const showFile = () => {
  const filePath = "./meuarquivo";
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject("Não foi possível exibir o conteúdo do arquivo!");
      } else {
        console.log(data);
        resolve();
      }
    });
  });
};
