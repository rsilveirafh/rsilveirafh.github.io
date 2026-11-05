---
nome: "A gas pipeline's impact on small-scale fisheries"
tipo: "impact assessment reports · Petrobras"
frente: ponte
resumo: "Twenty years of fish landing data from Bahia, rebuilt and analysed for the impact assessment reports on the Manati gas pipeline and platform, delivered to Petrobras."
stack: ["R", "dplyr", "sf", "Mann-Kendall and Sen (zyp)", "ggplot2", "Word reports generated from code"]
numeros:
  - { valor: "20 years", rotulo: "of monitoring (2005–2024)" }
  - { valor: "~366k", rotulo: "fishing trips in the database" }
  - { valor: "4", rotulo: "reports (1st to 4th)" }
ordem: 21
destaque: false
---

Since 2023 I have run the data analysis for the Impact Assessment Reports (RAI) on how the Manati gas pipeline and platform affect small-scale fisheries in Todos os Santos Bay and the Baixo Sul region of Bahia, delivered to Petrobras. I work with Priscilla Malafaia, who leads the writing of the reports. For the 1st report I produced the fishery indicator statistics (monthly catch, CPUE, production, cost and income by fishery, in both regions), nearly a hundred of its charts; that year the database was built by another consultant, in Python. I also analysed the 2nd and 3rd reports and am working on the 4th.

The database covers twenty years of landing monitoring in more than twenty fishing communities: about 366,000 trips, with the catch of each species. For the 4th report I rebuilt it from scratch as an R pipeline: I merged 92 raw spreadsheets from the monitoring system (2021–2024) into the historical series, reverse-engineered the catch and effort rules of the previous database and recalculated the distance from each fishing ground to the pipeline and the platform.

Auditing the historical series, I found and fixed inherited errors: distances in kilometres read as metres, fishing grounds sharing a name with the coordinates of the wrong region, and 2017 only half there.

The analyses combine trend tests (Mann-Kendall with pre-whitening, and Sen's slope) with comparisons between project phases (Mann-Whitney), by fishing ground, fishery and distance class. Triangulating that evidence points to where fishing may have been affected. The maps and tables in the reports also come out of the pipeline.
