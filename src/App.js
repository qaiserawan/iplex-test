import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav';
import Data from './components/data';
import Details from './components/details';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        
      </Router>
    </div>
  );
}

export default App;
