import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CartItem from './components/CartItem';
import CheckOut from './components/CheckOut';
import Success from './components/Success';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <ToastContainer/>
         <Routes>
             <Route path='' element={<Home/>}/>
             <Route path="/cart" element={<CartItem/>}/>
             <Route path="/checkout" element={<CheckOut/>}/>
             <Route path="/success" element={<Success/>}/>
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
