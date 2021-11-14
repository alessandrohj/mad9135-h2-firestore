import './App.css';
import { Switch, Route } from 'react-router-dom';
// import {getData, updateData, deleteData, addData} from './firebase/firebase.utils';
import Add from './components/Add/Add';
import Home from './components/Home/Home';

function App() {



  return (
    <div className="App">
  <h1>Firestore App</h1>
    <Switch>
    <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/add">
        <Add/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
