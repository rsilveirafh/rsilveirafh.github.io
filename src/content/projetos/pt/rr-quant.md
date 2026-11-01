---
nome: "rr-quant"
tipo: "finanças"
grupo: proprio
resumo: "Painel quantitativo pessoal que roda sozinho a cada pregão."
stack: ["Python", "yfinance", "Vercel"]
links:
  - { rotulo: "GitHub", url: "https://github.com/rsilveirafh/rr-quant" }
numeros:
  - { valor: "46", rotulo: "ativos por pregão" }
ordem: 16
destaque: false
---

Antes da abertura, puxa um retrato de 46 ativos (índices, commodities, câmbio, juros e volatilidade) e acrescenta leitura de regime e correlações, um placar de regressão logística para o Ibovespa e uma leitura Smart Money Concepts sobre os candles.
