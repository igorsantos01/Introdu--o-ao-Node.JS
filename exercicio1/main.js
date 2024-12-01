import { createFile } from "./createFile.js";
import { deleteFile } from "./deleteFile.js";
import { showFile } from "./showFile.js";
import { updateFile } from "./updateFile.js";

async function start() {
  await createFile(`
   Conteúdo inicial do arquivo.
   Criado com o módulo fs do Node.js
  `);
  await showFile();

  await updateFile(`
   Conteúdo modificado!
    `);
  await showFile();

  setTimeout(() => {
    deleteFile();
  }, 5000);
}
start();
