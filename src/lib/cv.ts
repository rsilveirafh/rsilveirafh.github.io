// Acesso ao currículo importado de ../curriculum (ver scripts/importar-cv.py).
import dados from '../data/cv.json';
import type { Lang } from '../i18n';

export type Txt = string | { pt: string; en: string } | null | undefined;

// O JSON tem campos ora traduzidos ({pt, en}), ora simples; tipamos de forma frouxa.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CV = dados as any;

export const tr = (v: Txt, lang: Lang): string => (v == null ? '' : typeof v === 'string' ? v : v[lang]);

const MESES = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

function data(v: string | number | null, lang: Lang): string {
  if (v == null) return lang === 'pt' ? 'hoje' : 'now';
  const [ano, mes] = String(v).split('-');
  if (!mes) return ano;
  return lang === 'pt' ? `${MESES.pt[+mes - 1]}/${ano}` : `${MESES.en[+mes - 1]} ${ano}`;
}

export const periodo = (inicio: string | number, fim: string | number | null, lang: Lang) => `${data(inicio, lang)} – ${data(fim, lang)}`;

// Markdown de linha (negrito e itálico) para HTML, com escape antes.
export function md(s: string): string {
  return s
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^\w*])\*(?!\s)(.+?)\*(?!\w)/g, '$1<em>$2</em>')
    .replace(/(^|[^\w])_(?!\s)(.+?)_(?!\w)/g, '$1<em>$2</em>');
}

// Destaca o nome do Ricardo nas listas de autores.
export const autores = (s: string) =>
  md(s).replace(/(Silveira-Filho, R\.R\.|Rodrigues, R\.)/g, '<strong>$1</strong>');
