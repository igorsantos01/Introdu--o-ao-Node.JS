import fs from "node:fs";
import path from "node:path";
export const addInfo = (system) => {
  return new Promise((resolve, reject) => {
    const logPath = path.resolve("C:/log/");
    if (fs.existsSync(logPath)) {
      fs.writeFile(logPath + "/log.txt", system, { flag: "a" }, (error) => {
        if (error) {
          reject(`Não foi possível salvar o arquivo: ${error.message}`);
        } else {
          resolve();
        }
      });
    } else {
      fs.mkdir(path.resolve(logPath), (err) => {
        if (err) {
          console.error("Erro ao criar diretório:", err);
        } else {
          console.log("Diretório criado com sucesso.");
        }
      });
    }
  });
};
