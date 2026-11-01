// Conteúdo das seções fixas (sobre, pesquisa, currículo, contato) nos dois idiomas.
// Projetos ficam em src/content/projetos/.

export const EMAIL = 'rsilveirafh@gmail.com';
export const LINKS = {
  linkedin: 'https://linkedin.com/in/rsilveirafh',
  github: 'https://github.com/rsilveirafh',
  lattes: 'http://lattes.cnpq.br/6028156427352678',
};

export const SOBRE = {
  pt: {
    papel: 'Biólogo de formação, hoje engenheiro de dados e software.',
    lede: 'Durante uma década fiz perguntas a dados biológicos: filogeografia, herpetologia, genômica de populações. Hoje construo os sistemas que transformam dados ambientais e de campo em algo sobre o que um time consegue agir.',
    disponivel: 'Disponível.',
    busca: 'Busco vagas remotas como cientista de dados ou desenvolvedor em dados ambientais, ESG, biodiversidade ou pesquisa.',
    botao: 'Falar comigo',
    destaque: 'Em destaque',
    comoTitulo: 'Como eu trabalho',
    como: [
      ['Especificação antes de código.', 'O projeto começa como contrato escrito: briefing, pesquisa de domínio e requisitos mapeados em fases MVP verticais, cada uma com critério de sucesso.'],
      ['Agentes dentro de um pipeline.', 'Conduzo o Claude Code por skills próprias de planejamento, execução, verificação e revisão. A mesma disciplina vale se o código vem de mim ou de um agente.'],
      ['Memória com humano no circuito.', 'Um vault Obsidian onde entra o diário e saem propostas estruturadas. Reviso cada uma antes de ser gravada.'],
      ['CI verde não é evidência.', 'Abrir o produto no ar, na mão, faz parte da minha definição de pronto.'],
    ],
  },
  en: {
    papel: 'Zoologist by training, now a data and software engineer.',
    lede: 'For a decade I asked questions of biological data: phylogeography, herpetology, population genomics. Today I build the systems that turn environmental and field data into something a team can act on.',
    disponivel: 'Open to work.',
    busca: 'Looking for remote roles as a data scientist or developer in environmental data, ESG, biodiversity or research.',
    botao: 'Get in touch',
    destaque: 'Selected work',
    comoTitulo: 'How I work',
    como: [
      ['Spec before code.', 'A project starts as a written contract: brief, domain research, then requirements mapped onto vertical MVP phases, each with explicit success criteria.'],
      ['Agents inside a pipeline.', 'I drive Claude Code through custom skills for planning, execution, verification and review, so the same discipline applies whether the code comes from me or from an agent.'],
      ['Memory with a human in the loop.', 'An Obsidian vault where a daily journal goes in and structured proposals come out. I review every one before it is written.'],
      ['Green CI is not evidence.', 'Opening the live product by hand is part of my definition of done.'],
    ],
  },
};

export const PESQUISA = {
  pt: {
    titulo: 'Pesquisa',
    texto: 'Doutorado e mestrado em Zoologia pela UFPB, em herpetologia, filogenética e filogeografia, principalmente de serpentes. Depois, dois pós-doutorados: UNEMAT, de 2018 a 2019, em ecologia vegetal e traços funcionais, e UFRN junto ao PPBio, de 2022 a 2023, em biodiversidade e bioinformática. Licenciatura em Ciências Biológicas pela UEFS.',
    selecao: 'Dezesseis artigos em periódicos. Uma seleção',
    completa: 'Lista completa no Lattes',
  },
  en: {
    titulo: 'Research',
    texto: 'PhD and MSc in Zoology at UFPB, working on herpetology, phylogenetics and phylogeography, mostly snakes. Two post-doctorates followed: UNEMAT from 2018 to 2019 on plant ecology and functional traits, and UFRN with PPBio from 2022 to 2023 on biodiversity and bioinformatics. Licentiate in Biological Sciences at UEFS.',
    selecao: 'Sixteen peer-reviewed articles. A selection',
    completa: 'Full list on Lattes',
  },
};

export const ARTIGOS = [
  { titulo: 'Brazil’s natural grasslands under attack.', revista: 'Science', ref: '384:168–169', ano: 2024 },
  { titulo: 'Hidden costs of Europe’s deforestation policy.', revista: 'Science', ref: '379:341–342', ano: 2023 },
  { titulo: 'Influence of soil properties on woody vegetation structure, diversity and seasonality in Neotropical savannas.', revista: 'Austral Ecology', ref: '49:e13501', ano: 2024 },
  { titulo: 'Herpetofauna of Nísia Floresta National Forest.', revista: 'Biota Neotropica', ref: '24:e20241643', ano: 2024 },
  { titulo: 'Estimating synchronous demographic changes across populations using hABC.', revista: 'Molecular Ecology', ref: '', ano: 2017 },
];

export const CV = {
  pt: {
    titulo: 'Currículo',
    baixar: 'Baixar PDF',
    experiencia: 'Experiência',
    formacao: 'Formação',
    empregos: [
      { quando: '2024–hoje', onde: 'Seteg', cargo: 'Analista de Inovação II (antes, Analista Ambiental)', texto: 'Lidero o portfólio de desenvolvimento do time de inovação: apps de coleta em campo, BI em Power BI e R/Shiny, conformidade ambiental e ESG, analytics de energia. Escrevi o manual de operação do time.' },
      { quando: '2023–2025', onde: 'Elementus Soluções Ambientais', cargo: 'Analista de Projetos Sênior', texto: '' },
      { quando: '2020–2024', onde: 'Conciso TI', cargo: 'Cientista de Dados', texto: 'Idealizei, construí e mantive o Nubus, chatbot de atendimento com 3 a 6 mil usuários únicos por mês e nota entre 4,7 e 4,8 de 5. Responsável pelo banco de dados do Na Esquina, app de entregas para o comércio de bairro criado durante a pandemia.' },
      { quando: '2010–2024', onde: 'Consultoria ambiental', cargo: 'em paralelo à pesquisa', texto: 'Monitoramento de fauna e relatórios para licenciamento. Por último, responsável técnico do monitoramento de tartarugas marinhas no Porto de Natal.' },
    ],
    estudos: [
      { quando: '2022–2023', curso: 'Pós-doutorado', onde: 'UFRN · PPBio' },
      { quando: '2018–2019', curso: 'Pós-doutorado', onde: 'UNEMAT' },
      { quando: '', curso: 'Doutorado e mestrado em Zoologia', onde: 'UFPB' },
      { quando: '', curso: 'Licenciatura em Ciências Biológicas', onde: 'UEFS' },
    ],
  },
  en: {
    titulo: 'Résumé',
    baixar: 'Download PDF',
    experiencia: 'Experience',
    formacao: 'Education',
    empregos: [
      { quando: '2024–now', onde: 'Seteg', cargo: 'Innovation Analyst II (previously Environmental Analyst)', texto: 'I lead the innovation team’s development portfolio: field data apps, BI in Power BI and R/Shiny, environmental compliance and ESG, energy analytics. I wrote the team’s operating manual.' },
      { quando: '2023–2025', onde: 'Elementus Soluções Ambientais', cargo: 'Senior Project Analyst', texto: '' },
      { quando: '2020–2024', onde: 'Conciso TI', cargo: 'Data Scientist', texto: 'Conceived, built and ran Nubus, a customer service chatbot with 3,000 to 6,000 unique users a month, rated 4.7 to 4.8 out of 5. Owned the database of Na Esquina, a delivery app for neighbourhood shops built during the pandemic.' },
      { quando: '2010–2024', onde: 'Environmental consulting', cargo: 'alongside research', texto: 'Fauna monitoring and licensing reports. Most recently technical lead of a sea turtle monitoring program at the Port of Natal.' },
    ],
    estudos: [
      { quando: '2022–2023', curso: 'Post-doctorate', onde: 'UFRN · PPBio' },
      { quando: '2018–2019', curso: 'Post-doctorate', onde: 'UNEMAT' },
      { quando: '', curso: 'PhD and MSc in Zoology', onde: 'UFPB' },
      { quando: '', curso: 'Licentiate in Biological Sciences', onde: 'UEFS' },
    ],
  },
};

export const STACK = ['R · Shiny · golem', 'Python', 'TypeScript', 'SQL · PostgreSQL', 'Next.js · Supabase', 'Power BI', 'QGIS · sf', 'Docker · CI/CD', 'Claude Code'];

// PDF do currículo por idioma (arquivo em public/). null = sem botão de download.
export const CV_PDF: Record<'pt' | 'en', string | null> = { pt: null, en: null };

export const CONTATO = {
  pt: { titulo: 'Contato', texto: 'Escreva para o e-mail ou me chame no LinkedIn.', copiar: 'copiar', copiado: 'copiado', fuso: 'Trabalho remoto, fuso UTC−3.' },
  en: { titulo: 'Contact', texto: 'Email me or reach out on LinkedIn.', copiar: 'copy', copiado: 'copied', fuso: 'Remote, UTC−3 time zone.' },
};
