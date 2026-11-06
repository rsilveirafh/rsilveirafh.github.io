---
nome: "Lojas virtuais para pequenos negócios"
tipo: "comércio local"
frente: software
resumo: "Duas lojas de confeitarias sobre o mesmo modelo: catálogo, configurador de produtos, PIX e painel de pedidos em tempo real."
stack: ["Next.js", "Supabase", "PIX", "PWA", "Tailwind"]
numeros:
  - { valor: "2", rotulo: "lojas montadas sobre o mesmo modelo" }
  - { valor: "259", rotulo: "testes automatizados" }
ordem: 7
destaque: false
---

A primeira loja foi para uma brigaderia: catálogo de pronta-entrega e encomendas, carrinho, retirada ou entrega e pagamento por PIX. Bolos e caixas de brigadeiro são montados num configurador, e o preço é calculado no servidor, não no navegador. A dona acompanha os pedidos num painel em tempo real, e a loja instala no celular como app.

Depois transformei essa loja num modelo. A segunda, para outra confeitaria, tem marca, banco de dados e deploy próprios, e as correções que surgiram nela voltaram para a primeira.

As duas foram publicadas e testadas em produção, mas não chegaram a ser lançadas. Cada versão só foi dada como pronta depois de testada na loja publicada, não só com os testes automatizados passando.
