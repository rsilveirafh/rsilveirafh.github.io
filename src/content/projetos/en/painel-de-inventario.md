---
nome: "Forest inventory dashboard"
tipo: "client dashboard · Seteg"
grupo: seteg
resumo: "A dashboard that tracks a forest inventory in progress: census area completed, trees measured, plots installed and daily output per field team."
stack: ["Next.js", "MSAL", "Microsoft Graph", "SharePoint", "site estático"]
numeros:
  - { valor: "5 min", rotulo: "between refreshes" }
  - { valor: "0", rotulo: "servers" }
ordem: 8
destaque: false
---

It is a static site with no server. Viewers sign in with the company’s Microsoft account, and the browser itself reads the field spreadsheet on SharePoint through Microsoft Graph, again every 5 minutes.

So no secret is stored anywhere, whoever can open the spreadsheet can see the dashboard, and the field team only edits the spreadsheet: there is no update job to maintain.

The dashboard recomputes everything from the raw rows, with the same rules as the spreadsheet formulas, so new rows show up without anyone touching a formula.
