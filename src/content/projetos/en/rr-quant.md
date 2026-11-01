---
nome: "rr-quant"
tipo: "finance"
resumo: "Personal quant dashboard that runs itself every trading session."
stack: ["Python", "yfinance", "Vercel"]
links:
  - { rotulo: "GitHub", url: "https://github.com/rsilveirafh/rr-quant" }
numeros:
  - { valor: "46", rotulo: "assets per session" }
ordem: 5
destaque: false
---
Pulls a 46-asset pre-market snapshot covering indices, commodities, FX, rates and volatility, then layers on regime and correlation reads, a logistic-regression scoreboard for the Ibovespa and a Smart Money Concepts view over OHLC.
