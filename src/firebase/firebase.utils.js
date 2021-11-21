import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, deleteDoc, updateDoc} from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyCktNICL86Mw-LEIGlWQsCLzaYXyVKfazo",
    authDomain: "firestore-dcdd3.firebaseapp.com",
    projectId: "firestore-dcdd3",
    storageBucket: "firestore-dcdd3.appspot.com",
    messagingSenderId: "236960400973",
    appId: "1:236960400973:web:759d8548a08536d8907e04",
    measurementId: "G-RT46ZSCTVJ"
  };

  //backup firestore
// export const firebaseConfig = {
//     apiKey: "AIzaSyCralNmXjElZESvSTnEmpT0idcm-lJMl54",
//     authDomain: "crud-67d97.firebaseapp.com",
//     projectId: "crud-67d97",
//     storageBucket: "crud-67d97.appspot.com",
//     messagingSenderId: "463343004571",
//     appId: "1:463343004571:web:dafc38d8f3782547750f3e"
//   };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


export async function addData(category, data){
    const docRef = await addDoc(collection(db, category), data);
      return docRef.id;
}

export async function deleteItem(category, id){
    await deleteDoc(doc(db, category, id));
    console.log('deleted')
}

export async function updateItem(category, id, data){
    const ref = doc(db, category, id);
    await updateDoc(ref, {
        title: data
    })
}