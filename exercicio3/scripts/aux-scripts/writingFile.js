const writingFile = (pathNote, content, rl, fs) => {
  const returnMenuOrExit = require("./returnMenuOrExit");
  try {
    fs.writeFileSync(pathNote, content, "utf-8");
    setTimeout(() => {
      console.clear();
      console.log("\nAnotação salva com sucesso!\n");
      returnMenuOrExit(rl);
    }, 1200);
  } catch (error) {
    console.log("Anotação não foi salva!", error);
  }
};

module.exports = writingFile;
