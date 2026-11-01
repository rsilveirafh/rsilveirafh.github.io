---
nome: "Painel de inventário florestal"
tipo: "painel para cliente · Seteg"
grupo: seteg
resumo: "Painel que acompanha um inventário florestal em andamento: área de censo concluída, árvores medidas, parcelas instaladas e produção diária por equipe."
stack: ["Next.js", "MSAL", "Microsoft Graph", "SharePoint", "site estático"]
numeros:
  - { valor: "5 min", rotulo: "entre uma atualização e outra" }
  - { valor: "0", rotulo: "servidores" }
ordem: 8
destaque: false
---

É um site estático, sem servidor. Quem abre entra com a conta Microsoft da empresa, e o próprio navegador lê a planilha de campo no SharePoint pela Microsoft Graph, de novo a cada 5 minutos.

Por isso não há segredo guardado em lugar nenhum, quem pode ver o painel é quem já pode abrir a planilha, e a equipe de campo só precisa editar a planilha: não existe rotina de atualização para manter.

O painel recalcula tudo a partir dos dados brutos, com as mesmas regras das fórmulas da planilha, então linhas novas entram sem ninguém mexer em fórmula.
