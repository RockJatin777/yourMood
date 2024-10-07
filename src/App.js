import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './Component/Navbar';
import Home from './Component/Home'
import Addiction from './Component/Addiction';
import Depression from './Component/Depression';
import Anxiety from './Component/Anxiety';
import ManagingSress from './Component/ManagingStress';
import Meditation from './Component/Meditation';
import GetHelp from './Component/GetHelp';
import Therepy from './Component/Therepy';
import Emotion from './Component/Emotion';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/addiction' Component={Addiction} />
        <Route path='/depression' Component={Depression} />
        <Route path="/anxiety" Component={Anxiety} />
        <Route path="/stress" Component={ManagingSress} />
        <Route path="/meditation" Component={Meditation} />
        <Route path="/help" Component={GetHelp} />
        <Route path='/therepy' Component={Therepy} />
        <Route path='/emotion' Component={Emotion} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
