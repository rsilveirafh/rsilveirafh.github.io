---
nome: "banca-simulada"
tipo: "applied AI"
frente: ponte
resumo: "Claude Code plugin that reviews a research proposal the way a thesis committee or grant panel would."
stack: ["Claude Code plugin", "Markdown", "Python"]
links:
  - { rotulo: "GitHub", url: "https://github.com/rsilveirafh/banca-simulada" }
  - { rotulo: "Plugin catalog", url: "https://github.com/rsilveirafh/claude-plugins" }
numeros:
  - { valor: "8", rotulo: "review axes" }
  - { valor: "12/12", rotulo: "planted errors caught" }
  - { valor: "0", rotulo: "invented quotes" }
ordem: 25
destaque: false
---

It reads the proposal across eight axes (coherence, method, feasibility, research ethics, references and more), points to the passage, grades the severity and suggests a fix without rewriting. It ends with the questions the committee is likely to ask.

It can only cite regulations from a file checked against official sources. In three test runs on fictional proposals with 12 planted errors each, it caught all of them and never quoted a passage that was not in the text.
