const fs = require("node:fs");
const path = require("node:path");
const returnMenuOrExit = require("./aux-scripts/returnMenuOrExit");
const readNotes = (rl, files) => {
  console.clear();
  console.log(`
    ***************************************
        
                  QUICK NOTES
    
    ***************************************
    
    Escolha a anotação que deseja ler:
    (Digite o número correspondente a anotação que deseja ler)`);
  files.forEach((file, index) => {
    console.log(`
      ${index + 1}-> ${file}`);
  });
  rl.question(`\n->  Essa é a sua escolha: `, (answer) => {
    if (files[answer - 1] !== undefined) {
      try {
        console.log();
        const pathNote = path.resolve("notes/", files[answer - 1]);
        const data = fs.readFileSync(pathNote, "utf-8");
        console.clear();
        console.log(
          `Nome do arquivo: ${
            files[answer - 1]
          }\n\nConteúdo do arquivo:\n-> ${data}\n`
        );
        returnMenuOrExit(rl);
      } catch (err) {
        console.log("Não foi possível ler o arquivo: ", err);
      }
    } else {
      console.clear();
      console.log(
        `Este valor não corresponde com nenhuma nota.\nPor favor, escolha um número entre 1 e ${files.length}`
      );
      setTimeout(() => readNotes(rl, files), 1500);
    }
  });
};

module.exports = readNotes;
