import fs from "node:fs";

export const deleteFile = () => {
  const filePath = "./meuarquivo";
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (error) => {
      if (error) {
        reject("Não foi possível excluir o arquivo!");
      } else {
        console.log("Arquivo excluído com sucesso!");
        resolve();
      }
    });
  });
};
