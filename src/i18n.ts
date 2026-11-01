export type Lang = 'pt' | 'en';
export type Secao = 'sobre' | 'projetos' | 'pesquisa' | 'cv' | 'contato';
export const SECOES: Secao[] = ['sobre', 'projetos', 'pesquisa', 'cv', 'contato'];

// Endereço de cada seção em cada idioma. Projetos ficam em <dir><slug>/.
export const ROTAS = {
  pt: { sobre: '/', projetos: '/projetos/', pesquisa: '/pesquisa/', cv: '/cv/', contato: '/contato/', dir: '/projetos/' },
  en: { sobre: '/en/', projetos: '/en/projects/', pesquisa: '/en/research/', cv: '/en/resume/', contato: '/en/contact/', dir: '/en/projects/' },
} as const;

export function urlDe(view: string, lang: Lang): string {
  return (SECOES as string[]).includes(view) ? ROTAS[lang][view as Secao] : `${ROTAS[lang].dir}${view}/`;
}

// "Arquivos" que o terminal mostra para cada seção.
export const ARQUIVOS = {
  pt: { sobre: 'sobre.md', projetos: 'projetos/', pesquisa: 'pesquisa.md', cv: 'cv.pdf', contato: 'contato.txt', dir: 'projetos' },
  en: { sobre: 'about.md', projetos: 'projects/', pesquisa: 'research.md', cv: 'resume.pdf', contato: 'contact.txt', dir: 'projects' },
} as const;

export const UI = {
  pt: {
    nav: { sobre: 'Sobre', projetos: 'Projetos', pesquisa: 'Pesquisa', cv: 'Currículo', contato: 'Contato' },
    status: 'remoto · UTC−3',
    idioma: 'Idioma',
    secoes: 'Seções',
    descricao: 'Ricardo Silveira: biólogo (PhD), cientista de dados e desenvolvedor. Projetos, pesquisa, currículo e contato.',
  },
  en: {
    nav: { sobre: 'About', projetos: 'Projects', pesquisa: 'Research', cv: 'Résumé', contato: 'Contact' },
    status: 'remote · UTC−3',
    idioma: 'Language',
    secoes: 'Sections',
    descricao: 'Ricardo Silveira: biologist (PhD), data scientist and developer. Projects, research, résumé and contact.',
  },
} as const;
