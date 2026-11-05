---
nome: "Coleta de dados de campo"
tipo: "suíte de apps · Seteg"
frente: ponte
resumo: "Apps que substituem o formulário de papel e a planilha em levantamentos de fauna e flora, para o registro chegar estruturado em vez de ser redigitado semanas depois."
stack: ["PostgreSQL", "PostGIS", "Supabase (RLS)", "offline-first"]
numeros:
  - { valor: "offline", rotulo: "funciona sem sinal e sincroniza depois" }
ordem: 22
destaque: true
---

Construí a camada de dados da suíte: PostgreSQL com PostGIS para as coordenadas, Supabase com regras de acesso linha a linha (RLS) e sincronização offline-first, porque no campo quase nunca há sinal.

Fui biólogo de campo por mais de uma década, então conheço o problema do outro lado: o dado anotado no papel, redigitado no escritório, com o erro aparecendo só no relatório.
