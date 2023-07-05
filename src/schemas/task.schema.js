import { z } from 'zod'

export const createTaskSchema = z.object({
  title: z.string({
    required_error: 'Title is required'
  }),
  description: z.string({
    required_error: 'Description mus be an string'
  }).optional(),
  date: z.string({}).datetime()
})