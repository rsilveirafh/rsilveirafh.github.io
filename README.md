# rsilveirafh.github.io

Portfólio de Ricardo Rodrigues, em duas telas: à esquerda um terminal, à direita o monitor com o conteúdo. As duas andam juntas. Um clique no monitor digita o comando equivalente no terminal, e um comando no terminal abre a página no monitor. No celular o terminal vira uma barra embaixo.

No ar em **https://rsilveirafh.github.io**, em português (`/`) e inglês (`/en/`).

## Como mexer

| Para… | Edite |
|---|---|
| acrescentar ou mudar um projeto | `src/content/projetos/pt/<slug>.md` e `src/content/projetos/en/<slug>.md` (mesmo nome nos dois) |
| textos de sobre, pesquisa e contato | `src/data/perfil.ts` |
| currículo e publicações | no repositório privado `curriculum` (`dados/cv.yaml`); depois rode `python scripts/importar-cv.py ../curriculum/dados/cv.yaml`, que gera `src/data/cv.json` (sem o telefone) e copia os PDFs para `public/cv/`; antes, rode `sh compilar.sh` no curriculum |
| prints de um projeto | coloque em `public/projetos/<slug>/` e liste em `imagens` no frontmatter (`arquivo` e `legenda`) |
| menu, endereços e nomes dos "arquivos" | `src/i18n.ts` |
| cores e layout | `src/styles/global.css` |
| comandos do terminal | `src/lib/terminal.ts` |

O frontmatter de cada projeto: `nome`, `tipo`, `grupo` (`seteg`, `proprio`, `antes` ou `pesquisa`), `resumo`, `ordem` e, opcionais, `stack`, `links`, `numeros`, `imagens` e `destaque` (aparece no início). O texto abaixo do frontmatter vira o corpo da página.

## Rodar

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run check    # confere os tipos
```

Cada push na `main` publica sozinho pelo GitHub Actions (`.github/workflows/deploy.yml`).

Feito com [Astro](https://astro.build).
