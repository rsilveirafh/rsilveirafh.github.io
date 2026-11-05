---
nome: "tetrapoDNA"
tipo: "open science"
frente: ponte
resumo: "Which Brazilian amphibians, reptiles, birds and mammals still have no public DNA sequence at all?"
stack: ["R", "taxize", "GitHub Actions", "GitHub Pages"]
links:
  - { rotulo: "GitHub", url: "https://github.com/rsilveirafh/tetrapoDNA" }
  - { rotulo: "Live dashboard", url: "https://rsilveirafh.github.io/tetrapoDNA/" }
numeros:
  - { valor: "~4,800", rotulo: "species checked" }
  - { valor: "2", rotulo: "sequence databases (BOLD and GenBank)" }
  - { valor: "weekly", rotulo: "refresh" }
ordem: 20
destaque: true
---

A public dashboard checks every species on the official checklists against BOLD and GenBank each week and ranks the gaps by threat and endemism.

The R pipeline checks synonyms in the Brazilian Fauna Taxonomic Catalogue and GBIF before calling something a gap: a species that moved to another genus should not show up as “no DNA” just because its sequence sits under the old name.

Researchers can publicly adopt a species to sequence, which turns the gap list into a work queue.

The idea started in my postdoc at UFRN with PPBio (2022–2023), where I built the pipeline for vertebrate checklists and genetic data coverage. tetrapoDNA is the complete, public version of that work.
