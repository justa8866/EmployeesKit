import { addDoc, getDocs, Timestamp, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db, employeeCol, employeeCollectionName } from '../../../firebase/config'
import { IEmployee } from '../types/IEmployee'

export const createEmployee = async (employee: IEmployee) => {
  try {
    const docRef = await addDoc(employeeCol, {
      ...employee,
      created: Timestamp.now(),
    })

    return docRef.id
  } catch (e) {
    return null
  }
}

export const getEmployees = async () => {
  try {
    const result = await getDocs(employeeCol)

    const data = result.docs.map(doc => ({ ...doc.data(), id: doc.id }))

    return data
  } catch (e) {
    return []
  }
}

export const deleteEmployee = async (id: string) => {
  try {
    const docRef = doc(db, `/${employeeCollectionName}/${id}`)

    await deleteDoc(docRef)
    return true
  } catch (err) {
    return false
  }
}

export const updateEmployee = async (id: string, employee: IEmployee) => {
  try {
    const docRef = doc(db, `/${employeeCollectionName}/${id}`)

    await updateDoc(docRef, {
      ...employee,
    })
    return true
  } catch (err) {
    return false
  }
}
