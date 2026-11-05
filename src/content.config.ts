import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Um arquivo por projeto e por idioma: src/content/projetos/<pt|en>/<slug>.md
// Imagens ficam em public/projetos/<slug>/ e entram em `imagens` pelo nome do arquivo.
const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    nome: z.string(),
    tipo: z.string(),
    // Bloco da página de projetos: software e dados, biologia e código juntos, ou biologia e pesquisa.
    // O empregador fica no campo `tipo` ("painel interno · Seteg").
    frente: z.enum(['software', 'ponte', 'biologia']),
    resumo: z.string(),
    stack: z.array(z.string()).default([]),
    links: z.array(z.object({ rotulo: z.string(), url: z.url() })).default([]),
    numeros: z.array(z.object({ valor: z.string(), rotulo: z.string() })).default([]),
    imagens: z.array(z.object({ arquivo: z.string(), legenda: z.string() })).default([]),
    ordem: z.number(),
    destaque: z.boolean().default(false),
  }),
});

export const collections = { projetos };
