import { Route, Router } from 'react-router-dom'
import { Home } from './Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/home" element={<Home />} />
      </Router>


    </div>
  );
}

export default App;
