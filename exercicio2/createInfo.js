import os from "node:os";

export const createInfo = () => {
  const systemName = os.platform();
  const systemArch = os.arch();
  const processorModel = os.cpus()[0].model;
  const systemUptime = Math.floor(os.uptime() / 3600);
  const memoryUsageInPercent = Math.floor(
    ((os.totalmem() - os.freemem()) / os.totalmem()) * 100
  );
  const system = `
            DETALHES DO SISTEMA
            
    Nome do Sistema Operacional: ${systemName}
    Arquitetura do Sistema Operacional: ${systemArch}
    Modelo do Processador: ${processorModel}
    Tempo de atividade do Sistema: ${systemUptime}h
    Uso de memória: ${memoryUsageInPercent}%
  `;
  return system;
};
