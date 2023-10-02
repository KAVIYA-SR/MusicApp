import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './component/NavComp';
import { Container } from 'react-bootstrap';
import Cancel from './component/Cancel';
import Success from './component/Success';
import Landing from './component/Landing';
import Store from './component/Store';
import { DataProvider } from './context/Data';  
function App() {
  return (
    
 
      <DataProvider>
       
      <BrowserRouter>
        <Routes>
          <Route path='store' element={<Store />}></Route>
          <Route path='/' element={<Landing />}></Route>
          <Route path="success" element={<Success />}></Route>
          <Route path="cancel" element={<Cancel />}></Route>
        </Routes>
      </BrowserRouter>
      </DataProvider>
  
    
  );
}

export default App;
