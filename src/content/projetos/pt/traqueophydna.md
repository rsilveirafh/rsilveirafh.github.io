---
nome: "traqueophyDNA"
tipo: "ciência aberta · em construção"
frente: ponte
resumo: "Quais plantas vasculares nativas do Brasil ainda não têm nenhuma sequência de DNA pública?"
stack: ["R", "GitHub Actions", "GitHub Pages"]
links:
  - { rotulo: "GitHub", url: "https://github.com/rsilveirafh/traqueophyDNA" }
  - { rotulo: "Painel ao vivo", url: "https://rsilveirafh.github.io/traqueophyDNA/" }
numeros:
  - { valor: "~35.200", rotulo: "espécies conferidas" }
  - { valor: "2", rotulo: "bases de sequências (BOLD e GenBank)" }
  - { valor: "semanal", rotulo: "atualização" }
ordem: 20.5
destaque: false
---

A mesma pergunta e o mesmo método do [tetrapoDNA](https://rsilveirafh.github.io/tetrapoDNA/), agora para as plantas. Cada espécie nativa da Flora e Funga do Brasil (angiospermas, gimnospermas, samambaias e licófitas) é conferida toda semana no BOLD e no GenBank, e o painel mostra a lacuna por grupo, família, estado e domínio fitogeográfico.

Antes de declarar que uma espécie não tem DNA, o pipeline procura a sequência sob os sinônimos do WCVP (Kew) e confere o nome na taxonomia do NCBI. Quando há motivo para desconfiar do nome, a espécie fica como “a verificar”, e o painel diz por quê.

Como no tetrapoDNA, pesquisadores podem adotar publicamente uma espécie para sequenciar. O painel ainda está em construção.
