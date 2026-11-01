import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export type Projeto = CollectionEntry<'projetos'> & { slug: string };

// Projetos de um idioma, na ordem definida no frontmatter. O id vem como "pt/tetrapodna".
export async function projetosDe(lang: Lang): Promise<Projeto[]> {
  const todos = await getCollection('projetos', (e) => e.id.startsWith(`${lang}/`));
  return todos
    .map((e) => ({ ...e, slug: e.id.slice(lang.length + 1) }))
    .sort((a, b) => a.data.ordem - b.data.ordem);
}
