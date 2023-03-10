import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_authDomain,
  projectId: import.meta.env.VITE_FIREBASE_projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_messagingSenderId,
  messagingSenderId: import.meta.env.VITE_FIREBASE_storageBucket,
  appId: import.meta.env.VITE_FIREBASE_appId,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
