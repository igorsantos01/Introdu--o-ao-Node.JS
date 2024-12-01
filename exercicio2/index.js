import { addInfo } from "./addInfo.js";
import { createInfo } from "./createInfo.js";

const system = createInfo();
const intervalo = setInterval(async () => {
  try {
    await addInfo(system);
    console.log(system);
  } catch (error) {
    console.log("Erro ao adicionar as informações ao log: ", error);
  }
}, 1000);
setTimeout(() => {
  clearInterval(intervalo);
}, 10000);
