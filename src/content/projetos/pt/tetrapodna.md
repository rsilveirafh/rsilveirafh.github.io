---
nome: "tetrapoDNA"
tipo: "ciência aberta"
grupo: proprio
resumo: "Quais anfíbios, répteis, aves e mamíferos do Brasil ainda não têm nenhuma sequência de DNA pública?"
stack: ["R", "taxize", "GitHub Actions", "GitHub Pages"]
links:
  - { rotulo: "GitHub", url: "https://github.com/rsilveirafh/tetrapoDNA" }
  - { rotulo: "Painel ao vivo", url: "https://rsilveirafh.github.io/tetrapoDNA/" }
numeros:
  - { valor: "~4.800", rotulo: "espécies conferidas" }
  - { valor: "2", rotulo: "bases de sequências (BOLD e GenBank)" }
  - { valor: "semanal", rotulo: "atualização" }
ordem: 10
destaque: true
---

Um painel público confere toda semana cada espécie das listas oficiais contra o BOLD e o GenBank e ordena as lacunas por grau de ameaça e endemismo.

O pipeline em R checa sinônimos no Catálogo Taxonômico da Fauna do Brasil e no GBIF antes de declarar uma lacuna: uma espécie que mudou de gênero não pode aparecer como “sem DNA” só porque a sequência está sob o nome antigo.

Pesquisadores podem adotar publicamente uma espécie para sequenciar, o que transforma a lista de lacunas numa fila de trabalho.

A ideia nasceu no meu pós-doutorado na UFRN, junto ao PPBio (2022–2023), onde montei o pipeline das listas de vertebrados e da cobertura de dados genéticos. O tetrapoDNA é a versão completa e pública desse trabalho.
