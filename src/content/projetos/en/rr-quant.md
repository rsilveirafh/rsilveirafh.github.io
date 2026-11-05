---
nome: "rr-quant"
tipo: "finance"
frente: software
resumo: "Personal quant dashboard that runs itself every trading session."
stack: ["Python", "yfinance", "Vercel"]
links:
  - { rotulo: "GitHub", url: "https://github.com/rsilveirafh/rr-quant" }
  - { rotulo: "Live dashboard", url: "https://rr-quant.vercel.app" }
numeros:
  - { valor: "46", rotulo: "assets per session" }
ordem: 9
destaque: false
---

Before the open, it pulls a snapshot of 46 assets (indices, commodities, FX, rates and volatility), then adds regime and correlation reads, a logistic-regression scoreboard for the Ibovespa and a Smart Money Concepts reading of the candles.
