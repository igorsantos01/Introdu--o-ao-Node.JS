const fs = require("node:fs");

try {
  const data = fs.readFileSync("./arquivo.txt", "utf-8");
  console.log(data);
} catch (error) {
  console.log("Não foi possível escrever no arquivo", error.message);
}
