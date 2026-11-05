---
nome: "Field data collection"
tipo: "app suite · Seteg"
frente: ponte
resumo: "Apps that replace paper forms and spreadsheets in fauna and flora surveys, so records arrive structured instead of being retyped weeks later."
stack: ["PostgreSQL", "PostGIS", "Supabase (RLS)", "offline-first"]
numeros:
  - { valor: "offline", rotulo: "works without signal and syncs later" }
ordem: 22
destaque: true
---

I built the data core of the suite: PostgreSQL with PostGIS for coordinates, Supabase with row-level security (RLS) and offline-first sync, because there is rarely any signal in the field.

I was a field biologist for over a decade, so I know the problem from the other side: data written on paper, retyped at the office, with errors that only surface in the report.
