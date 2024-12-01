const menu = require("../menu");

const returnMenuOrExit = (rl) => {
  rl.question(
    "Escolha uma opção: \n\n 1-> Retornar ao menu\n  (Digite 1 para retornar ao menu)\n\n 2-> Sair\n  (Digite 2 para encerrar a aplicação)\n\n-> Essa é sua escolha: ",
    (answer) => {
      switch (answer) {
        case "1":
          console.clear();
          menu(rl);
          break;
        case "2":
          console.clear();
          rl.close();
        default:
          console.clear();
          console.log(
            "A opção escolhida é inválida.\nPor favor escolha entre as opções 1 e 2\n"
          );
          setTimeout(() => returnMenuOrExit(rl), 1200);
      }
    }
  );
};
module.exports = returnMenuOrExit;
