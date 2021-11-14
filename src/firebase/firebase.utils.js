import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc } from 'firebase/firestore';
import cuid from 'cuid';


const firebaseConfig = {
    apiKey: "AIzaSyCktNICL86Mw-LEIGlWQsCLzaYXyVKfazo",
    authDomain: "firestore-dcdd3.firebaseapp.com",
    projectId: "firestore-dcdd3",
    storageBucket: "firestore-dcdd3.appspot.com",
    messagingSenderId: "236960400973",
    appId: "1:236960400973:web:759d8548a08536d8907e04",
    measurementId: "G-RT46ZSCTVJ"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


export async function getData(category){
    const peopleCol = collection(db, category);
    const peopleSnapshot = await getDocs(peopleCol)
    const peopleList = peopleSnapshot.docs.map(item => item.data())
    console.log(peopleList);
    return peopleList;
}


export async function addData(category, data, id){
    const docRef = await addDoc(collection(db, category), data);
      console.log("Document written with ID: ", docRef.id);
}

export async function deleteData(category, id){
    db.collection(category).doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

export async function updateData(category, id){
    let ref = db.collection(category).doc(id);
    //TODO: create fields to update
}