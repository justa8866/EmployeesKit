import { IEmployee } from '../domain/employee/types/IEmployee'
import { initializeApp } from 'firebase/app'
import { collection, CollectionReference, DocumentData, getFirestore } from 'firebase/firestore'
import { ITask } from '../domain/task/types/ITask.type'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_authDomain,
  projectId: import.meta.env.VITE_FIREBASE_projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_appId,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>
}

export const employeeCollectionName = 'employee'
export const employeeCol = createCollection<IEmployee>(employeeCollectionName)

export const taskCollectionName = 'task'
export const taskCol = createCollection<ITask>(taskCollectionName)
