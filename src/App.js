import './App.css';
import { Switch, Route } from 'react-router-dom';
import Add from './components/Add/Add';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection} from 'firebase/firestore';
import {firebaseConfig } from './firebase/firebase.utils';

function App() {
  const [shows, setShows] = useState([]);


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

async function getData (category) {
  const showsCol = collection(db, category);
  const showSnashot = await getDocs(showsCol);
  const showsList = showSnashot.docs.map(item => {
    return ({
      id: item.id,
      title: item.data()['title']
    })
})
return setShows(showsList);
 }

 useEffect(()=>{
   getData('american');
 })


 function updateList(obj){
   const newList = shows.map((item)=>{
    if(obj.id === item.id) {
      return obj;
    }
    else {
      return item;
    }
   });
   console.log(newList)
   setShows(newList)
 }



  return (
    <div className="App">
  <h1>Firestore App</h1>
    <Switch>
    <Route exact path="/" >
      <Home data={shows} updateData={updateList} updateShows={setShows}/>
      </Route>
      <Route path="/add">
        <Add/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
