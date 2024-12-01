const createNotes = (rl, index) => {
  const menu = require("./menu"); //Importa a função menu do arquivo menu.js
  const saveNotes = require("./saveNotes"); //Importa a função saveNotes do arquivo saveNotes.js
  console.clear(); //Faz a limpeza do console
  console.log(
    "***************************************\n\n\t      QUICK NOTES\n\n***************************************\n"
  ); //Escreve o título no console
  rl.question("-> Faça sua anotação abaixo: \n", (annotation) => {
    //Lê a resposta do usuário
    console.clear(); //Faz a limpeza do console
    if (annotation === "") {
      //Se a resposta for uma string vazia ele chama a função createNotes novamente
      createNotes(rl);
    } else {
      //Se a resposta for diferente de uma string vazia ele cumpre o bloco de código abaixo
      console.log(`Essa é sua anotação:\n\n> ${annotation}`); //Exibe no console o que o usuário digitou
      rl.question("\nDeseja salvar sua anotação?(sim/não)\n", (answer) => {
        //Faz a confirmação de salvar ou não a anotação do usuário
        if (answer.charAt(0).toLowerCase() === "s") {
          //Se a resposta for sim ele invoca a função saveNotes
          saveNotes(annotation, rl);
        } else if (answer.charAt(0).toLowerCase() === "n") {
          //Se a resposta for não ele invoca a função createNotes novamente
          createNotes(rl);
        } else {
          //Se a resposta for qualquer coisa diferente de sim e não ele explica ao usuário que essa etapa da aplicação só aceita sim e não, após isso, invoca o menu novamente
          console.clear();
          console.log(
            "Digite uma opção válida(sim/não).\nRedirecionando para o menu..."
          );

          setTimeout(() => menu(rl), 1500);
        }
      });
    }
  });
};

module.exports = createNotes;
