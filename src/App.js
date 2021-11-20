
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection} from 'firebase/firestore';
import {firebaseConfig } from './firebase/firebase.utils';
import Add from './components/Add/Add';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import './App.css';

function App() {
  const [shows, setShows] = useState([]);
  const [value, setValue] = useState(0);


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

async function getData () {
   //get collections
    const americanCol = collection(db, 'american');
    const britishCol = collection(db, 'british');
    const animeCol = collection(db, 'anime');
    //get Snapshots and lists
      const showsList = {
        american:  (await getDocs(americanCol)).docs.map(item=>({id: item.id, category: 'american', title: item.data()['title']})),
      british: (await getDocs(britishCol)).docs.map(item=>({id: item.id, category: 'british', title: item.data()['title']})),
     anime: (await getDocs(animeCol)).docs.map(item=>({id: item.id, category: 'anime', title: item.data()['title']})),
    };
  return (
    setShows(showsList)
  );
   }
  

 useEffect(()=>{
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
  <Header />
    <Switch>
    <Route exact path="/" >
      <Home data={shows} refreshList={refreshList} updateShows={setShows}/>
      </Route>
      <Route path="/add">
        <Add data={shows} updateList={updateList}/>
      </Route>
    </Switch>
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} className='border-t-2'>
    <BottomNavigation showLabels value={value}
  onChange={(ev, newValue) => {
    setValue(newValue);
  }}>
    <BottomNavigationAction href='/' label="Home" icon={<HomeIcon />} />
  <BottomNavigationAction href='#/add' label="Add" icon={<AddIcon />} />
    </BottomNavigation>
    </div>
    </div>
  );
}

export default App;
