import { Timestamp } from 'firebase/firestore'

export interface IEmployee {
  fullName: string
  email: string
  brithDate: Timestamp
  phoneNumber: string
  id?: string
  created?: Timestamp
}
