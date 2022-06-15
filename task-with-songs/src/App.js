import './App.css';
import Navbar from './components/Navbar';
import NewSingerList from './components/NewSingerList';
import SingerList from './components/SingerList';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <SingerList/> */}
      <NewSingerList/>
    </div>
  );
}

export default App;
