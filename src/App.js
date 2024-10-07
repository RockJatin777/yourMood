import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Component/Home'
import Addiction from './Component/Addiction';
import Depression from './Component/Depression';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/addiction' Component={Addiction} />
        <Route path='/depression' Component={Depression} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
