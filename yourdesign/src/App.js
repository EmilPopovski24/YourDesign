import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { UserLogin } from './components/Client/Login/Login';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='main-content'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user-login" element={<UserLogin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
