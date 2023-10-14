import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Yearly from './component/Yearly';
import Landing from './component/Landing';
import Monthly from './component/Monthly';
import Subscription from './component/Subscription';
import Free from './component/Free';
import { DataProvider } from './context/Data';  
// import FreePlaylist from './component/FreePlaylist';
import Player from './component/Player';
function App() {
  return (
    <div className='appp'>
      <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/subscription' element={<Subscription />}></Route>
          <Route path='/free' element={<Free />}></Route>
          <Route path='/monthly' element={<Monthly />}></Route>
          <Route path="/yearly" element={<Yearly/>}></Route>
          <Route path="/freeplaylist" element={<Player/>}></Route>
        </Routes>
      </BrowserRouter>
      </DataProvider>
  
      </div>
  );
}

export default App;
