import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { team } from './data/team';

const authorSlugs = team.map((member) => member.slug);

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    author: z.enum(authorSlugs as [string, ...string[]]),
    image: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
