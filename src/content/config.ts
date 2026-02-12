import { defineCollection, z } from 'astro:content';

// Records collection (日志、文档、短句)
const records = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['log', 'doc', 'quote']),
    date: z.date(),
    image: z.string().optional(),
  }),
});

// Experience collection (工作经历)
const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.date(),
    endDate: z.union([z.date(), z.literal(null)]),
    current: z.boolean().default(false),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { records, experience };
