const menu = async (rl) => {
  const createNotes = require("./createNotes"); //Importa a função createNotes do arquivo createNotes.js
  const listNotes = require("./listNotes"); //Importa a função listNotes do arquivo listNotes.js
  console.clear(); //Faz a limpeza do console
  console.log(
    "***************************************\n\n\t      QUICK NOTES\n\n***************************************\n\n Escolha uma opção:\n\n  1 -> Criar uma anotação rápida\n  (Digite 1 para criar uma anotação rápida)\n\n  2 -> Listar todas as anotações salvas\n  (Digite 2 para listar as anotações salvas)\n\n  3 -> Sair\n  (Digite 3 para encerrar a aplicação)\n"
  ); //Escreve o título juntamente com as opções do menu no console
  rl.question(
    "(Pressione Enter para confirmar a escolha)\n-> Essa é sua escolha: ", //Lê a resposta do usuário
    (answer) => {
      switch (answer) {
        case "1":
          createNotes(rl); //Caso o usuário digite 1 será chamado a função responsável pela criação de notas
          break;
        case "2":
          listNotes(rl); //Caso o usuário digite 2 será chamado a função responsável por listar as notas salvas
          break;
        case "3":
          rl.close(); //Finaliza a interface
          break;
        default:
          console.log(
            "Você escolheu uma opção inválida! Digite 1 ao 3 para escolher as opções."
          ); //Texto explicativo para o usuário entender que a resposta foi inválida
          menu(rl); //Chama a função menu novamente para o usuário poder digitar a resposta certa
      }
    }
  );
  rl.on("close", () => {
    console.log("\nObrigado por utilizar o Quick Notes. Até mais!");
    process.exit(0);
  }); //É executado assim que o rl.close() é invocado.
};
module.exports = menu;
