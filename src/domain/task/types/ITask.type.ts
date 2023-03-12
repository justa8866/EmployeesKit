import { DocumentReference, Timestamp } from 'firebase/firestore'

export interface ITask {
  title: string
  description: string
  dueDate: Timestamp
  assignee?: DocumentReference
  created?: Timestamp
  id?: string
}
