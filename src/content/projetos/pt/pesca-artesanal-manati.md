---
nome: "Impacto de um gasoduto na pesca artesanal"
tipo: "relatórios de impacto · Petrobras"
frente: ponte
resumo: "Vinte anos de dados de desembarque pesqueiro na Bahia reconstruídos e analisados para os relatórios de avaliação de impacto do gasoduto e da plataforma de Manati, entregues à Petrobras."
stack: ["R", "dplyr", "sf", "Mann-Kendall e Sen (zyp)", "ggplot2", "relatórios em Word gerados por código"]
numeros:
  - { valor: "20 anos", rotulo: "de monitoramento (2005–2024)" }
  - { valor: "~366 mil", rotulo: "viagens de pesca na base" }
  - { valor: "4", rotulo: "relatórios (do 1º ao 4º)" }
ordem: 21
destaque: false
---

Desde 2023 faço a análise de dados dos Relatórios de Avaliação de Impacto (RAI) do gasoduto e da plataforma de Manati sobre a pesca artesanal na Baía de Todos os Santos e no Baixo Sul da Bahia, entregues à Petrobras. O trabalho é em parceria com Priscilla Malafaia, responsável pela elaboração dos relatórios. No 1º RAI, fiz as estatísticas dos indicadores de pesca (captura, CPUE, produção, custo e renda mensais por pescaria, nos dois territórios), quase cem gráficos do relatório; a base daquele ano foi montada por outro consultor, em Python. Analisei também o 2º e o 3º e estou no 4º.

A base reúne vinte anos do monitoramento de desembarque de mais de vinte comunidades pesqueiras: cerca de 366 mil viagens, com a captura de cada espécie. No 4º RAI, refiz a base do zero num pipeline em R: juntei 92 planilhas brutas do sistema de monitoramento (2021–2024) à série histórica, reconstruí por engenharia reversa as regras de captura e esforço da base anterior e recalculei a distância de cada pesqueiro ao gasoduto e à plataforma.

Na auditoria da série histórica, encontrei e corrigi erros herdados: distâncias em quilômetros lidas como metros, pesqueiros homônimos com a coordenada do território errado e o ano de 2017 pela metade.

As análises cruzam testes de tendência (Mann-Kendall com correção de autocorrelação e Sen) e comparações entre fases do empreendimento (Mann-Whitney) por pesqueiro, pescaria e classe de distância. A triangulação dessas evidências aponta onde a pesca pode ter sido afetada. Os mapas e os quadros dos relatórios também saem do pipeline.
