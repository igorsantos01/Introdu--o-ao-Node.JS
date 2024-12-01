const fs = require("node:fs");

try {
  fs.writeFileSync("./arquivo.txt", "Olá,mundo!", "utf-8");
  console.log("Arquivo escrito com sucesso!");
} catch (error) {
  console.log("Não foi possível escrever no arquivo", error.message);
}
