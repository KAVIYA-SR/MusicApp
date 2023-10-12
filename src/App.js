import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cancel from './component/Cancel';
// import Success from './component/Success';
import Landing from './component/Landing';
// import Store from './component/Store';
import Subscription from './component/Subscription';
import Free from './component/Free';
import { DataProvider } from './context/Data';  
function App() {
  return (
    <div className='appp'>
      <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/subscription' element={<Subscription />}></Route>
          <Route path='/free' element={<Free />}></Route>
          {/* <Route path='store' element={<Store />}></Route> */}
          {/* <Route path="success" element={<Success />}></Route>
          <Route path="cancel" element={<Cancel />}></Route> */}
        </Routes>
      </BrowserRouter>
      </DataProvider>
  
      </div>
  );
}

export default App;
