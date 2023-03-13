import { object, string } from 'zod'
import { ITask } from '../types/ITask.type'

export type TaskInput = ITask

export const taskSchema = object({
  title: string().nonempty('Title is required').max(255, 'Title must be less than 255 characters'),
  description: string()
    .nonempty('Description is required')
    .max(255, 'Description must be less than 255 characters'),
})
