// Lógica do terminal: interpreta comandos, navega o monitor e espelha no terminal o que a
// pessoa clica no monitor. Roda uma vez só; o elemento do terminal persiste entre páginas.

type Lang = 'pt' | 'en';
type Link = { rotulo: string; url: string };
type ProjetoResumo = { slug: string; nome: string; tipo: string; resumo: string; stack: string[]; links: Link[] };
type Dados = {
  rotas: Record<Lang, Record<string, string>>;
  arquivos: Record<Lang, Record<string, string>>;
  projetos: Record<Lang, ProjetoResumo[]>;
  cvPdf: Record<Lang, string | null>;
  email: string;
  links: { linkedin: string; github: string; lattes: string };
};
type Navegar = (url: string) => Promise<void>;

const SECOES = ['sobre', 'projetos', 'pesquisa', 'cv', 'contato'];
const ALIAS: Record<string, string> = {
  sobre: 'sobre', about: 'sobre', inicio: 'sobre', 'início': 'sobre', home: 'sobre', '~': 'sobre',
  projetos: 'projetos', projects: 'projetos',
  pesquisa: 'pesquisa', research: 'pesquisa',
  cv: 'cv', curriculo: 'cv', 'currículo': 'cv', resume: 'cv', 'résumé': 'cv',
  contato: 'contato', contact: 'contato',
};
const VERBOS = ['cd', 'cat', 'open', 'less', 'more', 'ls', 'dir', 'xdg-open', 'start'];

const TXT = {
  pt: {
    tente: 'experimente:', chips: ['help', 'projetos', 'cv', 'contato', 'lang en'],
    motd: 'As duas telas andam juntas. Digite', motd2: 'ou clique em qualquer coisa no monitor.',
    naoAchei: (c: string) => `comando não encontrado: ${c}`, quisDizer: 'você quis dizer', digite: 'digite', paraLista: 'para ver os comandos.',
    idioma: 'idioma: português', aberto: (estreito: boolean) => (estreito ? '↑ aberto na tela de cima' : '→ aberto no monitor da direita'),
  },
  en: {
    tente: 'try:', chips: ['help', 'projects', 'resume', 'contact', 'lang pt'],
    motd: 'Both screens move together. Type', motd2: 'or click anything on the monitor.',
    naoAchei: (c: string) => `command not found: ${c}`, quisDizer: 'did you mean', digite: 'type', paraLista: 'for the list of commands.',
    idioma: 'language: English', aberto: (estreito: boolean) => (estreito ? '↑ open on the screen above' : '→ open on the right-hand screen'),
  },
};

const esc = (s: string) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function lev(a: string, b: string): number {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}

export function iniciarTerminal(navegar: Navegar) {
  const dados: Dados = JSON.parse(document.getElementById('term-dados')!.textContent!);
  const out = document.getElementById('term-out')!;
  const input = document.getElementById('term-input') as HTMLInputElement;
  const caixa = document.getElementById('terminal')!;
  const reduzido = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const estreito = () => matchMedia('(max-width: 820px)').matches;

  const st = {
    lang: 'pt' as Lang, view: 'sobre', ocupado: false, hist: [] as string[], hpos: 0,
    esperado: null as string | null, trocouIdioma: false, primeiro: true,
  };

  const projetos = () => dados.projetos[st.lang];
  const acharProjeto = (s: string) => {
    const k = s.toLowerCase().replace(/[_\s]/g, '-');
    const exato = projetos().find((p) => p.slug === k || p.nome.toLowerCase().replace(/_/g, '-') === k);
    if (exato) return exato;
    const pre = projetos().filter((p) => p.slug.startsWith(k));
    return pre.length === 1 ? pre[0] : null;
  };
  const urlDe = (v: string, l: Lang) => (SECOES.includes(v) ? dados.rotas[l][v] : `${dados.rotas[l].dir}${v}/`);
  const cmdDe = (v: string, l: Lang = st.lang) => {
    const f = dados.arquivos[l];
    if (v === 'projetos') return `ls ${f.projetos}`;
    if (v === 'cv') return `open ${f.cv}`;
    if (SECOES.includes(v)) return `cat ${f[v]}`;
    return `cat ${f.dir}/${v}.md`;
  };

  // ---------- saída ----------
  const btn = (cmd: string, rotulo = cmd) => `<button type="button" class="t-cmd" data-run="${esc(cmd)}">${esc(rotulo)}</button>`;
  const link = (u: string, r: string) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(r)}</a>`;
  const print = (...linhas: string[]) => {
    for (const l of linhas) {
      const d = document.createElement('div');
      d.className = 'ln';
      d.innerHTML = l;
      out.appendChild(d);
    }
    out.scrollTop = out.scrollHeight;
  };
  const eco = (texto: string) => print(`<span class="p">ricardo@dev:~$</span> ${esc(texto)}`);
  const nota = () => `<span class="dim">${TXT[st.lang].aberto(estreito())}</span>`;

  function saida(v: string) {
    const pt = st.lang === 'pt';
    if (v === 'sobre') {
      print(`<span class="hi">Ricardo Silveira</span> · ${pt ? 'biólogo (PhD), cientista de dados e desenvolvedor' : 'biologist (PhD), data scientist and developer'}`, nota());
    } else if (v === 'projetos') {
      const w = Math.max(...projetos().map((p) => p.slug.length)) + 3;
      print(`<span class="dim">${dados.arquivos[st.lang].projetos}  (${projetos().length})</span>`,
        ...projetos().map((p) => btn(cmdDe(p.slug), p.slug) + ' '.repeat(w - p.slug.length) + `<span class="dim">${esc(p.tipo.split(' · ')[0])}</span>`),
        nota());
    } else if (v === 'pesquisa') {
      print(pt ? 'Mestrado e doutorado em Zoologia (UFPB) · 2 pós-doutorados' : 'MSc and PhD in Zoology (UFPB) · 2 postdocs',
        pt ? '15 artigos revisados por pares + 1 aceito · 2 cartas na <span class="hi">Science</span>' : '15 peer-reviewed papers + 1 accepted · 2 letters in <span class="hi">Science</span>', nota());
    } else if (v === 'cv') {
      const pdf = dados.cvPdf[st.lang];
      print(`2024–${pt ? 'hoje' : 'now '}  Seteg · ${pt ? 'Inovação, PO e Tech Lead' : 'Innovation, PO and Tech Lead'}`,
        `2023–2025  Elementus · ${pt ? 'monitoramento de tartarugas marinhas' : 'sea turtle monitoring'}`,
        `2020–2024  Conciso TI · ${pt ? 'cientista de dados' : 'data scientist'}`,
        `2011–2024  ${pt ? 'consultor ambiental e estatístico' : 'environmental and statistical consultant'}`,
        `2010–2023  ${pt ? 'pesquisa: mestrado, doutorado e 2 pós-docs' : 'research: MSc, PhD and 2 postdocs'}`,
        ...(pdf ? [`PDF: ${link(pdf, pdf.split('/').pop()!)}`] : []), nota());
    } else if (v === 'contato') {
      print(`e-mail    <span class="hi">${esc(dados.email)}</span>`,
        `linkedin  ${link(dados.links.linkedin, dados.links.linkedin.replace('https://', ''))}`,
        `github    ${link(dados.links.github, dados.links.github.replace('https://', ''))}`, nota());
    } else {
      const p = projetos().find((x) => x.slug === v);
      if (!p) return;
      print(`<span class="hi">${esc(p.nome)}</span> · <span class="dim">${esc(p.tipo)}</span>`, esc(p.resumo),
        `<span class="dim">stack:</span> ${esc(p.stack.join(' · '))}`, ...p.links.map((l) => `→ ${link(l.url, l.rotulo)}`), nota());
    }
  }

  function ajuda() {
    const pt = st.lang === 'pt', f = dados.arquivos[st.lang];
    const linhas: [string, string][] = pt
      ? [['sobre', 'quem eu sou'], ['projetos', 'o que eu construí'], [`cat ${f.dir}/<nome>`, 'abre um projeto (tab completa)'],
         ['pesquisa', 'formação e artigos'], ['cv', 'currículo'], ['contato', 'e-mail e links'], ['lang en', 'switch to English'], ['clear', 'limpa a tela']]
      : [['about', 'who I am'], ['projects', 'what I built'], [`cat ${f.dir}/<name>`, 'open a project (tab completes)'],
         ['research', 'education and papers'], ['resume', 'résumé'], ['contact', 'email and links'], ['lang pt', 'mudar para português'], ['clear', 'clear the screen']];
    const w = Math.max(...linhas.map((l) => l[0].length)) + 3;
    print(`<span class="dim">${pt ? 'comandos' : 'commands'}</span>`,
      ...linhas.map(([c, d]) => '  ' + (c.includes('<') ? esc(c) : btn(c)) + ' '.repeat(w - c.length) + `<span class="dim">${d}</span>`),
      `<span class="dim">${pt ? '↑ ↓ histórico · tab completa · também aceita cd, cat, open e ls' : '↑ ↓ history · tab completes · cd, cat, open and ls work too'}</span>`);
  }

  // ---------- navegação ----------
  function ir(v: string, l: Lang = st.lang, trocaIdioma = false) {
    if (v === st.view && l === st.lang) return void saida(v);
    st.esperado = `${l}|${v}`;
    st.trocouIdioma = trocaIdioma;
    navegar(urlDe(v, l));
  }

  function alvo(palavras: string[]): { view?: string; falta?: string } {
    const resto = palavras.join(' ').replace(/^(~\/|\.\/)/, '').replace(/\/+$/, '').replace(/\.(md|pdf|txt)$/, '');
    if (!resto) return { view: 'sobre' };
    if (ALIAS[resto]) return { view: ALIAS[resto] };
    const m = resto.match(/^(projetos|projects)[/\s]+(.+)$/);
    if (m) {
      const p = acharProjeto(m[2]);
      return p ? { view: p.slug } : { falta: m[2] };
    }
    const p = acharProjeto(resto);
    return p ? { view: p.slug } : { falta: resto };
  }

  // Palavras para sugestão e tab, no idioma da página.
  const palavras = () => [
    ...(st.lang === 'pt'
      ? ['sobre', 'projetos', 'pesquisa', 'cv', 'curriculo', 'contato', 'ajuda', 'limpar']
      : ['about', 'projects', 'research', 'resume', 'contact']),
    'help', 'lang', 'clear', 'ls', 'whoami', 'history', ...projetos().map((p) => p.slug),
  ];

  function executar(bruto: string) {
    const pt = st.lang === 'pt';
    const linha = bruto.trim();
    if (!linha) return;
    const ps = linha.split(/\s+/);
    const cabeca = ps[0].toLowerCase();
    const args = ps.slice(1).map((w) => w.toLowerCase());

    switch (cabeca) {
      case 'help': case 'ajuda': case '?': case 'man': return ajuda();
      case 'clear': case 'limpar': case 'cls': out.innerHTML = ''; return;
      case 'lang': case 'idioma': case 'language': {
        const para = args[0];
        if (para !== 'pt' && para !== 'en') return print('<span class="dim">lang pt | lang en</span>');
        if (para === st.lang) return print(TXT[para].idioma);
        return ir(st.view, para, true);
      }
      case 'whoami': return print(pt ? 'ricardo · biólogo que constrói sistemas de dados' : 'ricardo · a biologist who builds data systems');
      case 'pwd': return print('/home/ricardo');
      case 'date': return print(new Date().toLocaleString(pt ? 'pt-BR' : 'en-GB', { dateStyle: 'full', timeStyle: 'short' }));
      case 'echo': return print(esc(ps.slice(1).join(' ')));
      case 'history': return print(...st.hist.map((h, i) => `<span class="dim">${String(i + 1).padStart(3)}</span>  ${esc(h)}`));
      case 'exit': case 'logout': case 'sair':
        return print(pt ? `não tem saída por aqui. Mas tem ${btn('contato')}.` : `there is no way out. There is ${btn('contact')}, though.`);
      case 'rm': return print(`<span class="err">rm: ${pt ? 'permissão negada; este portfólio é só leitura' : 'permission denied; this portfolio is read-only'}</span>`);
      case 'sudo':
        if (/^(contratar|hire)$/.test(args.join(' ')))
          return print(`[sudo] ${pt ? 'senha para recrutador' : 'password for recruiter'}: ********`,
            `<span class="hi">${pt ? 'acesso concedido.' : 'access granted.'}</span> ${pt ? 'próximo passo' : 'next step'}: ${esc(dados.email)}`);
        return print(`<span class="err">${pt ? 'você não está no arquivo sudoers. Este incidente será reportado.' : 'you are not in the sudoers file. This incident will be reported.'}</span>`,
          `<span class="dim">${pt ? 'tente' : 'try'}: ${btn(pt ? 'sudo contratar' : 'sudo hire')}</span>`);
      case 'ls': case 'dir':
        if (!args.length || args[0] === '~' || args[0] === '.') {
          const f = dados.arquivos[st.lang];
          return print(SECOES.map((v) => btn(cmdDe(v), f[v])).join('   '));
        }
        break;
    }

    const a = alvo(VERBOS.includes(cabeca) ? args : [cabeca, ...args]);
    if (a.view) return ir(a.view);

    const ruim = a.falta || cabeca;
    const melhor = palavras().map((w) => [w, lev(ruim, w)] as const).sort((x, y) => x[1] - y[1])[0];
    print(`<span class="err">${esc(TXT[st.lang].naoAchei(ruim))}</span>`);
    if (melhor && melhor[1] <= Math.max(2, Math.floor(ruim.length / 3))) {
      const sug = projetos().some((p) => p.slug === melhor[0]) ? cmdDe(melhor[0]) : melhor[0];
      print(`${TXT[st.lang].quisDizer} ${btn(sug)}?`);
    } else {
      print(`<span class="dim">${TXT[st.lang].digite}</span> ${btn('help')} <span class="dim">${TXT[st.lang].paraLista}</span>`);
    }
  }

  function enviar(texto: string) {
    eco(texto);
    const t = texto.trim();
    if (t && st.hist[st.hist.length - 1] !== t) st.hist.push(t);
    st.hpos = st.hist.length;
    input.value = '';
    executar(texto);
  }

  const esperar = (ms: number) => new Promise((r) => setTimeout(r, ms));
  async function digitarERodar(texto: string) {
    if (st.ocupado) return;
    st.ocupado = true;
    try {
      if (!reduzido) {
        input.value = '';
        for (const ch of texto) {
          input.value += ch;
          await esperar(texto.length > 22 ? 14 : 24);
        }
        await esperar(140);
      }
      enviar(texto);
    } finally {
      st.ocupado = false;
    }
  }

  function pintarChips() {
    const t = TXT[st.lang];
    document.getElementById('term-chips')!.innerHTML =
      `<span>${t.tente}</span>` + t.chips.map((c) => `<button type="button" class="chip" data-run="${c}">${c}</button>`).join('');
  }

  // ---------- eventos ----------
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const el = e.target as HTMLElement;
    const copiar = el.closest<HTMLButtonElement>('[data-copiar]');
    if (copiar) {
      const valor = copiar.dataset.copiar!;
      const feito = () => {
        const antes = copiar.textContent;
        copiar.textContent = copiar.dataset.copiado || '✓';
        setTimeout(() => { copiar.textContent = antes; }, 1600);
      };
      navigator.clipboard?.writeText(valor).then(feito, () => {});
      return;
    }
    const vista = el.closest<HTMLElement>('a[data-view]');
    const rodar = el.closest<HTMLElement>('[data-run]');
    if (vista) { e.preventDefault(); digitarERodar(cmdDe(vista.dataset.view!)); return; }
    if (rodar) { e.preventDefault(); digitarERodar(rodar.dataset.run!); return; }
    if (el.closest('.term-out') && !el.closest('a, button') && !getSelection()?.toString()) input.focus();
  }, true);

  document.getElementById('term-form')!.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!st.ocupado) enviar(input.value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      if (!st.hist.length) return;
      e.preventDefault();
      st.hpos = Math.max(0, Math.min(st.hist.length, st.hpos + (e.key === 'ArrowUp' ? -1 : 1)));
      input.value = st.hist[st.hpos] || '';
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const v = input.value;
      const m = v.match(/^(.*?)([^\s/]*)$/)!;
      const antes = m[1], parte = m[2].toLowerCase();
      const f = dados.arquivos[st.lang];
      let pool: string[] = /\S/.test(antes) ? [] : palavras();
      if (/(projetos|projects)[/\s]+$/i.test(antes)) pool = projetos().map((p) => p.slug);
      if (/^(cat|open|cd|less)\s+$/i.test(antes)) pool = [...SECOES.map((s) => f[s]), ...projetos().map((p) => p.slug)];
      if (/^lang\s+$/i.test(antes)) pool = ['pt', 'en'];
      const hits = [...new Set(pool.filter((w) => w.startsWith(parte)))];
      if (hits.length === 1) input.value = antes + hits[0] + (hits[0].endsWith('/') ? '' : ' ');
      else if (hits.length > 1) {
        let pre = hits[0];
        for (const h of hits) while (!h.startsWith(pre)) pre = pre.slice(0, -1);
        if (pre.length > parte.length) input.value = antes + pre;
        else { eco(v); print(`<span class="dim">${hits.map(esc).join('   ')}</span>`); }
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      out.innerHTML = '';
    }
  });

  const toggle = document.getElementById('term-toggle')!;
  toggle.addEventListener('click', () => {
    const aberto = caixa.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(aberto));
    toggle.textContent = aberto ? 'terminal ▾' : 'terminal ▴';
    if (aberto) out.scrollTop = out.scrollHeight;
  });

  // Toda carga de página (a primeira e cada navegação) passa por aqui.
  document.addEventListener('astro:page-load', () => {
    const main = document.getElementById('conteudo');
    if (!main) return;
    const lang = (main.dataset.lang === 'en' ? 'en' : 'pt') as Lang;
    const view = main.dataset.pagina || 'sobre';
    const mudouIdioma = lang !== st.lang || st.primeiro;
    st.lang = lang;
    st.view = view;
    if (mudouIdioma) pintarChips();

    if (st.primeiro) {
      st.primeiro = false;
      const quando = new Date().toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
      print(`<span class="dim">ricardo@dev · ${esc(quando)}</span>`, `${TXT[lang].motd} ${btn('help')} ${TXT[lang].motd2}`, '');
      eco(cmdDe(view));
      saida(view);
    } else if (st.esperado === `${lang}|${view}`) {
      if (st.trocouIdioma) print(TXT[lang].idioma);
      saida(view);
    } else {
      // Chegou por outro caminho (voltar do navegador, link digitado): mostra o comando equivalente.
      eco(cmdDe(view));
      saida(view);
    }
    st.esperado = null;
    st.trocouIdioma = false;
    if (!estreito()) input.focus({ preventScroll: true });
  });
}
