const os = require("node:os");

const platform = os.platform();
console.log(platform);

const arch = os.arch();
console.log(arch);

const cpus = os.cpus();
console.log(cpus);

const totalmem = os.totalmem();
console.log(totalmem / 1024 / 1024 / 1024);
