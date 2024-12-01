const menu = require("./scripts/menu"); //Requisição da função menu
const readline = require("node:readline"); //Requisição do módulo readline
const rl = readline.createInterface({
  input: process.stdin, //Entrada de dados do usuário através do terminal
  output: process.stdout, //Saída de dados do usuário através do terminal
}); //Configuração da interface do readline
console.log("Bem-vindo ao Quick Notes!"); //Exibindo mensagem de boas vindas
process.stdout.write("Aguarde, estamos preparando o menu para você"); //Exibindo mensagem para indicar que o menu está sendo carregado
const interval = setInterval(() => process.stdout.write("."), 400); //Simulando um carregamento visual com . sendo adicionados por 0,4s após o texto acima
setTimeout(() => {
  clearInterval(interval); //Finaliza o setInterval para que não se repita eternamente
  try {
    menu(rl); //Tentativa de carregar o menu
  } catch (error) {
    console.error("Ocorreu um erro ao carregar o menu: ", error); //Captura o erro que impediu o menu de iniciar
  }
}, 1600); //O menu é invocado após 1.6 segundos para simular o carregamento.;
