import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Um arquivo por projeto e por idioma: src/content/projetos/<pt|en>/<slug>.md
const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    nome: z.string(),
    tipo: z.string(),
    resumo: z.string(),
    stack: z.array(z.string()),
    links: z.array(z.object({ rotulo: z.string(), url: z.url() })),
    numeros: z.array(z.object({ valor: z.string(), rotulo: z.string() })).default([]),
    ordem: z.number(),
    destaque: z.boolean().default(false),
  }),
});

export const collections = { projetos };
