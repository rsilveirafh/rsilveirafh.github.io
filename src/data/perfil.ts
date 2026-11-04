// Textos fixos do site nos dois idiomas. Currículo e publicações vêm de src/data/cv.json
// (importado do repositório curriculum); projetos ficam em src/content/projetos/.

export const EMAIL = 'rsilveirafh@gmail.com';
export const LINKS = {
  linkedin: 'https://linkedin.com/in/rsilveirafh',
  github: 'https://github.com/rsilveirafh',
  lattes: 'http://lattes.cnpq.br/6028156427352678',
};

export const SOBRE = {
  pt: {
    papel: 'Biólogo (PhD), cientista de dados e desenvolvedor.',
    lede: [
      'Sou biólogo, com doutorado em Zoologia e dois pós-doutorados, e trabalho com dados e desenvolvimento de software desde 2020. Nos últimos dois anos, liderei a área de Inovação de uma consultoria ambiental como Product Owner e Tech Lead.',
      'Programo em TypeScript, Python e R. Trabalho com escopo claro, critérios de aceite e decisões documentadas, e uso IA generativa no desenvolvimento com o ganho medido.',
    ],
    busca: 'Busco vagas em dados, produto e IA aplicada, de preferência remotas.',
    botao: 'Falar comigo',
    numerosTitulo: 'Em números',
    numeros: [
      ['~45', 'pessoas usando o sistema de horas que liderei como PO'],
      ['14 → 2', 'sistemas internos consolidados'],
      ['~70%', 'menos tempo em tarefas com IA, medido nas horas apontadas'],
      ['3–6 mil', 'usuários por mês no chatbot que criei'],
    ],
    destaque: 'Em destaque',
    comoTitulo: 'Como eu trabalho',
    como: [
      ['Especificação antes de código.', 'O projeto começa como contrato escrito: briefing, pesquisa de domínio e requisitos divididos em fases pequenas e entregáveis, cada uma com critério de sucesso.'],
      ['Agentes dentro de um processo.', 'Conduzo o Claude Code por skills próprias de planejamento, execução, verificação e revisão. A mesma disciplina vale se o código vem de mim ou de um agente.'],
      ['Memória com revisão humana.', 'Um vault Obsidian onde entra o diário e saem propostas estruturadas. Reviso cada uma antes de ser gravada.'],
      ['Teste passando não é prova.', 'Abrir o produto publicado e usar com as próprias mãos faz parte da minha definição de pronto.'],
    ],
  },
  en: {
    papel: 'Biologist (PhD), data scientist and developer.',
    lede: [
      'I am a biologist with a PhD in Zoology and two postdocs, and I have worked in data and software development since 2020. For the last two years I led the Innovation area of an environmental consultancy as Product Owner and Tech Lead.',
      'I code in TypeScript, Python and R. I work with clear scope, acceptance criteria and documented decisions, and I use generative AI in development with the gain measured.',
    ],
    busca: 'Looking for roles in data, product and applied AI, preferably remote.',
    botao: 'Get in touch',
    numerosTitulo: 'By the numbers',
    numeros: [
      ['~45', 'people using the time tracking system I led as PO'],
      ['14 → 2', 'internal systems consolidated'],
      ['~70%', 'less time on AI-assisted tasks, measured in logged hours'],
      ['3–6k', 'monthly users of the chatbot I built'],
    ],
    destaque: 'Selected work',
    comoTitulo: 'How I work',
    como: [
      ['Spec before code.', 'A project starts as a written contract: brief, domain research, then requirements split into small shippable phases, each with explicit success criteria.'],
      ['Agents inside a process.', 'I drive Claude Code through custom skills for planning, execution, verification and review, so the same discipline applies whether the code comes from me or from an agent.'],
      ['Memory with human review.', 'An Obsidian vault where a daily journal goes in and structured proposals come out. I review every one before it is written.'],
      ['Passing tests are not proof.', 'Opening the published product and using it by hand is part of my definition of done.'],
    ],
  },
};

export const GRUPOS = {
  pt: {
    seteg: { titulo: 'Na Seteg (2024–2026)', nota: 'Consultoria ambiental. Sem nomes de sistemas nem de clientes, por confidencialidade.' },
    proprio: { titulo: 'Projetos próprios e código aberto', nota: '' },
    antes: { titulo: 'Na Conciso TI (2020–2024)', nota: '' },
    pesquisa: { titulo: 'Pesquisa', nota: '' },
  },
  en: {
    seteg: { titulo: 'At Seteg (2024–2026)', nota: 'Environmental consultancy. System and client names left out for confidentiality.' },
    proprio: { titulo: 'Personal and open-source projects', nota: '' },
    antes: { titulo: 'At Conciso TI (2020–2024)', nota: '' },
    pesquisa: { titulo: 'Research', nota: '' },
  },
};

export const PESQUISA = {
  pt: {
    titulo: 'Pesquisa',
    texto: [
      'Antes dos dados e do software, foram mais de dez anos de pesquisa em biologia. Mestrado e doutorado em Zoologia na UFPB, sobre mimetismo e filogeografia de serpentes. Depois, dois pós-doutorados: ecologia vegetal no Cerrado, na UNEMAT, e conservação, biodiversidade e bioinformática na UFRN, junto ao PPBio.',
      'São 15 artigos revisados por pares e 1 aceito, incluindo duas cartas na Science (2023 e 2024). Aqui estão os trabalhos dos últimos três anos; a lista completa está no Lattes.',
    ],
    publicacoes: 'Publicações recentes',
    aceito: 'aceito',
    tecnica: 'Produção técnica',
    coorientacoes: 'Coorientações',
    bancas: 'Bancas',
    ensino: 'Ensino',
    completa: 'Currículo Lattes completo',
  },
  en: {
    titulo: 'Research',
    texto: [
      'Before data and software came more than ten years of biology research. An MSc and a PhD in Zoology at UFPB, on mimicry and phylogeography of snakes. Then two postdocs: plant ecology in the Cerrado at UNEMAT, and conservation, biodiversity and bioinformatics at UFRN with PPBio.',
      'That adds up to 15 peer-reviewed papers and 1 accepted, including two letters in Science (2023 and 2024). Below is the work from the last three years; the full list is on Lattes.',
    ],
    publicacoes: 'Recent publications',
    aceito: 'accepted',
    tecnica: 'Technical reports (in Portuguese)',
    coorientacoes: 'Co-supervision (in Portuguese)',
    bancas: 'Thesis committees (in Portuguese)',
    ensino: 'Teaching (in Portuguese)',
    completa: 'Full Lattes CV',
  },
};

export const CV_TXT = {
  pt: { titulo: 'Currículo', baixar: 'Baixar PDF', experiencia: 'Experiência', formacao: 'Formação', posdoc: 'Pós-doutorados', posdocUm: 'Pós-doutorado', competencias: 'Competências', idiomas: 'Idiomas', cursos: 'Cursos' },
  en: { titulo: 'Résumé', baixar: 'Download PDF', experiencia: 'Experience', formacao: 'Education', posdoc: 'Postdocs', posdocUm: 'Postdoc', competencias: 'Skills', idiomas: 'Languages', cursos: 'Courses' },
};

// PDF do currículo por idioma (copiado para public/cv/ pelo scripts/importar-cv.py). null = sem botão.
export const CV_PDF: Record<'pt' | 'en', string | null> = { pt: '/cv/curriculo-ricardo-silveira.pdf', en: '/cv/resume-ricardo-silveira.pdf' };

export const CONTATO = {
  pt: { titulo: 'Contato', texto: 'Escreva para o e-mail ou me chame no LinkedIn.', copiar: 'copiar', copiado: 'copiado', fuso: 'Trabalho remoto, fuso UTC−3.' },
  en: { titulo: 'Contact', texto: 'Email me or reach out on LinkedIn.', copiar: 'copy', copiado: 'copied', fuso: 'Remote, UTC−3 time zone.' },
};
