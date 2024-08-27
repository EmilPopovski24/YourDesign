import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home';
import { UserLogin } from './components/Client/Login/Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main-content'>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user-login" element={<UserLogin />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
