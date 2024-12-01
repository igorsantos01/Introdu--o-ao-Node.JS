const listNotes = async (rl, index) => {
  const fs = require("node:fs/promises");
  const path = require("node:path");
  const menu = require("./menu.js");
  const readNotes = require("./readNotes.js");
  const deleteNote = require("./deleteNote.js");
  const pathNotes = path.resolve("./notes");

  console.clear();
  const files = await fs.readdir(pathNotes);
  const notes = files.map(
    (file, index) => `
  \t\t${index + 1}-> ${file}`
  );
  if (files.length !== 0) {
    try {
      console.log("\nNotas salvas:");
      console.log(`
      ***************************************
          
                    QUICK NOTES
      
      ***************************************
  
                Notas salvas:
             ${notes.join("\n")}
                  
      Escolha uma opção:
  
        1-> Ler uma anotação
        (Digite 1 para ler a anotação que deseja)
  
        2-> Excluir uma anotação
        (Digite 2 para excluir a anotação que deseja)
  
        3-> Retornar ao menu
        (Digite 3 para retornar ao menu)
  
        4-> Sair
        (Digite 4 para encerrar a aplicação)`);

      rl.question(`\n->  Essa é a sua escolha: `, (answer) => {
        switch (answer) {
          case "1":
            readNotes(rl, files);
            break;
          case "2":
            deleteNote(rl, files);
            break;
          case "3":
            menu(rl, index);
            break;
          case "4":
            rl.close();
          default:
            console.log(
              "A opção escolhida é inválida.\nPor favor, escolha uma opção entre 1 e 4!\n"
            );
            setTimeout(() => listNotes(rl, index), 1200);
            break;
        }
      });
    } catch (err) {
      console.error("Erro ao acessar a pasta ou listar as notas:", err.message);
    }
  } else {
    console.log(
      "Você não possui notas salvas.\nVocê será redirecionado para o menu para que possa criar uma nota."
    );
    setTimeout(() => menu(rl, index), 2000);
  }
};

module.exports = listNotes;
