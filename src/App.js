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
  // const [american, setAmerican] = useState([]);
  // const [british, setBritish] = useState([]);
  // const [anime, setAnime] = useState([]);


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

// async function getData (category) {
//   const showsCol = collection(db, category);
//   const showSnashot = await getDocs(showsCol);
//   const showsList = showSnashot.docs.map(item => {
//     return ({
//       id: item.id,
//       title: item.data()['title']
//     })
// })
// console.log(showsList);
// return setShows(showsList);
//  }

async function getData () {
   //get collections
    const americanCol = collection(db, 'american');
    const britishCol = collection(db, 'british');
    const animeCol = collection(db, 'anime');
    //get Snapshots and lists
    // const americanList = (await getDocs(americanCol)).docs.map(item=>({id: item.id, title: item.data()['title']}));
    // const britishList = (await getDocs(britishCol)).docs.map(item=>({id: item.id, title: item.data()['title']}));
    // const animeList =  (await getDocs(animeCol)).docs.map(item=>({id: item.id, title: item.data()['title']}));
  //   const showsList = 
  //    (await getDocs(americanCol)).docs.map(item=>({id: item.id, category: 'american', title: item.data()['title']})),
  //     (await getDocs(britishCol)).docs.map(item=>({id: item.id, category: 'british', title: item.data()['title']})),
  //  (await getDocs(animeCol)).docs.map(item=>({id: item.id, category: 'anime', title: item.data()['title']})),
  //   ;
      const showsList = {
        american:  (await getDocs(americanCol)).docs.map(item=>({id: item.id, category: 'american', title: item.data()['title']})),
      british: (await getDocs(britishCol)).docs.map(item=>({id: item.id, category: 'british', title: item.data()['title']})),
     anime: (await getDocs(animeCol)).docs.map(item=>({id: item.id, category: 'anime', title: item.data()['title']})),
    };

    console.log(showsList);
  return (
    setShows(showsList)
    // setAnime(showsList.anime),
    // setAmerican(showsList.american),
    // setBritish(showsList.british)
  );
   }
  

 useEffect(()=>{
  //  getData('american');
  getData();
 },[])


 function refreshList(category, obj){
   let list = shows;
   let newList = list[`${category}`].map((item)=>{
    if(obj.id === item.id) {
      return obj;
    }
    else {
      return item;
    }
   });
   list[`${category}`] = newList;
   console.log(list)
   setShows(list)
 }

function updateList(){
  getData();
}


  return (
    <div className="App">
  <h1>Firestore App</h1>
    <Switch>
    <Route exact path="/" >
      <Home data={shows} refreshList={refreshList} updateShows={setShows}/>
      </Route>
      <Route path="/add">
        <Add data={shows} updateList={updateList}/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
