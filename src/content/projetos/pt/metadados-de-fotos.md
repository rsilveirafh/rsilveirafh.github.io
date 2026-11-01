---
nome: "Extrator de metadados de fotos de campo"
tipo: "app desktop · Seteg"
grupo: seteg
resumo: "Programa que lê data, hora e coordenadas das fotos de campo e entrega tudo numa planilha, com o município de cada ponto."
stack: ["Python", "OCR (Tesseract)", "EXIF", "geocodificação reversa", "Windows"]
numeros:
  - { valor: "3", rotulo: "camadas de leitura por foto" }
  - { valor: "0", rotulo: "instalação para a equipe" }
ordem: 7
destaque: false
---

Cada imagem é lida em três camadas: os metadados EXIF do arquivo original, que são os mais confiáveis; o texto carimbado na foto, por OCR, para quando o EXIF se perdeu (prints e fotos reenviadas por WhatsApp apagam esses dados); e a geocodificação reversa das coordenadas, que dá o município e o estado.

A planilha marca duplicatas, por nome ou por conteúdo (mesma data e coordenada de outra foto), e diz de onde veio cada dado e o que faltou.

Vai para a equipe como um único executável para Windows, com Python, o OCR e a base de municípios embutidos. Ninguém precisa instalar nada.
