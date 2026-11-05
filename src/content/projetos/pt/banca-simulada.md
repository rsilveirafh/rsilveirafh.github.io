---
nome: "banca-simulada"
tipo: "IA aplicada"
frente: ponte
resumo: "Plugin do Claude Code que revisa um projeto de pesquisa como uma banca faria, do TCC ao concurso docente."
stack: ["Claude Code plugin", "Markdown", "Python"]
links:
  - { rotulo: "GitHub", url: "https://github.com/rsilveirafh/banca-simulada" }
  - { rotulo: "Catálogo de plugins", url: "https://github.com/rsilveirafh/claude-plugins" }
numeros:
  - { valor: "8", rotulo: "eixos de avaliação" }
  - { valor: "12/12", rotulo: "erros plantados encontrados" }
  - { valor: "0", rotulo: "citações inventadas" }
ordem: 25
destaque: false
---

Lê o projeto em oito eixos (coerência, método, viabilidade, ética em pesquisa, referências e outros), aponta o trecho, dá a gravidade e sugere a correção sem reescrever o texto. No fim, lista as perguntas prováveis da arguição.

Só pode citar normas de um arquivo conferido nas fontes oficiais. Em três execuções de teste com projetos fictícios, cada um com 12 erros plantados, encontrou todos e nunca citou um trecho que não estava no texto.
