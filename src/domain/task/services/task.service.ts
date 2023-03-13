import { employeeCollectionName, taskCollectionName } from './../../../firebase/config'
import { doc, addDoc, getDocs, deleteDoc, updateDoc, Timestamp } from 'firebase/firestore'
import { db, taskCol } from '../../../firebase/config'
import { ITask } from '../types/ITask.type'

export const createTask = async (assignee: string, task: ITask) => {
  try {
    const employeeRef = doc(db, `/${employeeCollectionName}/${assignee}`)
    task.assignee = employeeRef

    const docRef = await addDoc(taskCol, {
      ...task,
      created: Timestamp.now(),
    })

    return docRef.id
  } catch (e) {
    return null
  }
}

export const getTasks = async () => {
  try {
    const result = await getDocs(taskCol)

    const data = result.docs.map(doc => ({ ...doc.data(), id: doc.id }))

    return data
  } catch (e) {
    return []
  }
}

export const deleteTask = async (id: string) => {
  try {
    const docRef = doc(db, `/${taskCollectionName}/${id}`)

    await deleteDoc(docRef)
    return true
  } catch (err) {
    return false
  }
}

export const updateTask = async (id: string, assignee: string, task: ITask) => {
  try {
    const docRef = doc(db, `/${taskCollectionName}/${id}`)

    const employeeRef = doc(db, `/${employeeCollectionName}/${assignee}`)
    task.assignee = employeeRef

    await updateDoc(docRef, {
      ...task,
    })
    return true
  } catch (err) {
    return false
  }
}
