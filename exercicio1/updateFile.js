import fs from "node:fs";

export const updateFile = (text) => {
  const filePath = "./meuarquivo";
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, text, (error) => {
      if (error) {
        reject("Não foi possível editar o conteúdo do arquivo", error.message);
      } else {
        console.log("Arquivo editado com sucesso!");
        resolve();
      }
    });
  });
};
