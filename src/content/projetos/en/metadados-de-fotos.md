---
nome: "Field photo metadata extractor"
tipo: "desktop app · Seteg"
frente: ponte
resumo: "A program that reads date, time and coordinates from field photos and delivers them in a spreadsheet, with the municipality for each point."
stack: ["Python", "OCR (Tesseract)", "EXIF", "geocodificação reversa", "Windows"]
numeros:
  - { valor: "3", rotulo: "reading layers per photo" }
  - { valor: "0", rotulo: "installs for the team" }
ordem: 23
destaque: false
---

Each image is read in three layers: the EXIF metadata in the original file, the most reliable source; the text stamped on the photo, through OCR, for when the EXIF is gone (screenshots and photos forwarded on WhatsApp strip it); and reverse geocoding of the coordinates, which gives the municipality and state.

The spreadsheet flags duplicates, by name or by content (same date and coordinates as another photo), and says where each value came from and what is missing.

It ships to the team as a single Windows executable with Python, the OCR engine and the municipality database bundled in. Nobody has to install anything.
