import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';

function App() {
  return (
    <div className="App bg-yellow-200 h-96">
      <nav className='flex justify-end'>
        <Link className='m-2' to="/">Home</Link>
        <Link className='m-2' to="/about">About</Link>
        <Link className='m-2' to="/">Contact</Link>
      </nav>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
