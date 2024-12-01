const fs = require("node:fs");
const path = require("node:path");
const returnMenuOrExit = require("./aux-scripts/returnMenuOrExit");

const deleteNote = (rl, files) => {
  console.clear();
  console.log(`
    ***************************************
        
                  QUICK NOTES
    
    ***************************************`);
  files.map((file, index) =>
    console.log(`
      ${index + 1}-> ${file}`)
  );
  rl.question("\n->  Escolha a anotação que deseja excluir: ", (answer) => {
    console.clear();
    if (files[answer - 1] !== undefined) {
      rl.question(
        `\n-> ${files[answer - 1]}\n\nDeseja excluir essa nota?(sim/não)`,
        (confirmation) => {
          if (confirmation.charAt(0).toLowerCase() === "s") {
            const pathNote = path.resolve("notes/", files[answer - 1]);
            fs.unlink(pathNote, (err) => {
              if (err) {
                console.log("Erro ao excluir o arquivo:", err);
              }
              console.clear();
              console.log(`Arquivo excluído com sucesso.\nNome do arquivo excluído:\n-> ${
                files[answer - 1]
              }
          `);
              returnMenuOrExit(rl);
            });
          } else {
            deleteNote(rl, files);
          }
        }
      );
    } else {
      console.clear();
      console.log(`
        Este valor não corresponde com nenhuma nota.
        Por favor, escolha um número entre 1 e ${files.length}`);
      setTimeout(() => deleteNote(rl, files), 1500);
    }
  });
};

module.exports = deleteNote;
