---
nome: "Online stores for small businesses"
tipo: "local commerce"
frente: software
resumo: "Two confectionery stores on the same template: catalogue, product configurator, PIX instant payments and a real-time order panel."
stack: ["Next.js", "Supabase", "PIX", "PWA", "Tailwind"]
numeros:
  - { valor: "2", rotulo: "stores built on the same template" }
  - { valor: "259", rotulo: "automated tests" }
ordem: 7
destaque: false
---

The first store was for a brigadeiro shop: a catalogue of ready-made items and custom orders, cart, pickup or delivery and PIX payments. Cakes and brigadeiro boxes are put together in a configurator, and the price is calculated on the server, not in the browser. The owner follows orders on a real-time panel, and the store installs on a phone as an app.

Then I turned that store into a template. The second, for another confectionery, has its own brand, database and deployment, and the fixes that came up there flowed back into the first.

Both were deployed and tested in production but never launched. Each version was only called done after being tested on the published store, not just with the automated tests passing.
