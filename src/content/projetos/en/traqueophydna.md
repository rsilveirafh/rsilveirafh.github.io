---
nome: "traqueophyDNA"
tipo: "open science · in progress"
frente: ponte
resumo: "Which native Brazilian vascular plants still have no public DNA sequence at all?"
stack: ["R", "GitHub Actions", "GitHub Pages"]
links:
  - { rotulo: "GitHub", url: "https://github.com/rsilveirafh/traqueophyDNA" }
  - { rotulo: "Live dashboard", url: "https://rsilveirafh.github.io/traqueophyDNA/" }
numeros:
  - { valor: "~35,200", rotulo: "species checked" }
  - { valor: "2", rotulo: "sequence databases (BOLD and GenBank)" }
  - { valor: "weekly", rotulo: "refresh" }
ordem: 20.5
destaque: false
---

The same question and method as [tetrapoDNA](https://rsilveirafh.github.io/tetrapoDNA/), now for plants. Every native species in Flora e Funga do Brasil (flowering plants, gymnosperms, ferns and lycophytes) is checked against BOLD and GenBank each week, and the dashboard breaks the gap down by group, family, state and phytogeographic domain.

Before calling a species a gap, the pipeline looks for sequences under its WCVP (Kew) synonyms and checks the name against the NCBI taxonomy. When there is reason to doubt the name, the species is marked “to verify” and the dashboard says why.

As with tetrapoDNA, researchers can publicly adopt a species to sequence. The dashboard is still under construction.
