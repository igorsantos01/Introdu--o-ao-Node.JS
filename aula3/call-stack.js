function greet() {
  return console.log("Hello");
}

function respond() {
  setTimeout(() => {
    return console.log("Hey");
  }, 1000);
}

greet();
respond();

(() => {
  return console.log("Bye");
})();
