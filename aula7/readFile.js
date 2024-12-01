const fs = require("node:fs");
const filePath = "./arquivo.txt";

fs.readFile(filePath, "utf-8", (error, data) => {
  if (error) {
    console.log("Não foi possível escrever no arquivo", error.message);
    return;
  }

  const texts = data.split(",");
  console.log(texts);
  texts.forEach((text) => console.log(text));
});
