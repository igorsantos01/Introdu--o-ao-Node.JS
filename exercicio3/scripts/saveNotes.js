const writingFile = require("./aux-scripts/writingFile");

const saveNotes = async (content, rl) => {
  const path = require("node:path");
  const fs = require("node:fs");

  console.clear();
  if (!fs.existsSync("./notes")) {
    fs.mkdir("./notes", (error) => {
      try {
      } catch {
        console.log('Não foi possível criar o diretório "notes"', error);
      }
    });
  }
  const index = fs.readdirSync(path.resolve("./notes"), (error, files) => {
    try {
      return files;
    } catch {
      console.log(error);
    }
  }).length;
  rl.question(
    "(O arquivo será salvo como padrão 'note' caso não escolha o nome)\nEscolha o nome do arquivo: ",
    (answer) => {
      if (answer === "") {
        const pathNote = path.resolve(`./notes/note-${index + 1}.txt`);
        writingFile(pathNote, content, rl, fs);
      } else {
        const pathNote = path.resolve(`./notes/${answer}.txt`);
        writingFile(pathNote, content, rl, fs);
      }
    }
  );
};

module.exports = saveNotes;
