---
nome: "banca-simulada"
tipo: "AI tool"
resumo: "Claude Code plugin that reviews a research proposal the way a thesis committee or grant panel would."
stack: ["Claude Code plugin", "Markdown", "Python"]
links:
  - { rotulo: "GitHub", url: "https://github.com/rsilveirafh/banca-simulada" }
numeros:
  - { valor: "12/12", rotulo: "planted errors caught" }
  - { valor: "3", rotulo: "test runs" }
  - { valor: "0", rotulo: "invented quotes" }
ordem: 2
destaque: true
---
It checks coherence, method, feasibility, research ethics and references, quotes the passage, grades the severity and suggests a fix without rewriting. It can only cite regulations from a file checked against official sources.

In three test runs on fictional proposals with 12 planted errors each, it caught all of them and never quoted a passage that was not in the text.
