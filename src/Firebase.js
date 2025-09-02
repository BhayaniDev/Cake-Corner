import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
	apiKey: 'AIzaSyBqOoxtbhUnO_cA36C0dhGVkNoSdX8WUXM',
	authDomain: 'cake-corner2.firebaseapp.com',
	databaseURL: 'https://cake-corner2-default-rtdb.firebaseio.com',
	projectId: 'cake-corner2',
	storageBucket: 'cake-corner2.appspot.com',
	messagingSenderId: '494219148460',
	appId: '1:494219148460:web:f1ce922f909d44b8767309',
}

const firebase = initializeApp(firebaseConfig)
const db = getFirestore(firebase)
const auth = getAuth(firebase)

export { db, auth }
export const rdb = getDatabase(firebase)
