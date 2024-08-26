import { Route, Routes } from 'react-router-dom'
import { Home } from './Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main-content'>
      <Routes>
          <Route path="/home" element={<Home />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
