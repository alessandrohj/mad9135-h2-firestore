import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from 'firebase/firestore';
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


export async function getData(categorie){
    const peopleCol = collection(db, categorie);
    const peopleSnapshot = await getDocs(peopleCol)
    const peopleList = peopleSnapshot.docs.map(item => item.data())
    console.log(peopleList);
    return peopleList;
}

export async function addData(data, categorie){
    db.collection(categorie).doc(cuid()).set(data)
    .then(()=>{
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

export async function deleteData(categorie, id){
    db.collection(categorie).doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

export async function updateData(categorie, id){
    let ref = db.collection(categorie).doc(id);
    //TODO: create fields to update
}