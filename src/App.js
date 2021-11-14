import './App.css';
import {getData} from './firebase/firebase.utils';

function App() {
  getData();

  return (
    <div className="App">
  <h1>Firestore App</h1>
    </div>
  );
}

export default App;
