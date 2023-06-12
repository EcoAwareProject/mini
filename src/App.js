import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Database from './components/Database';
import Camera from './components/Camera';
import Contact from './components/Contact';
import Contributors from './components/Contributors';
import Upload from './components/Upload';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
    
    <Routes>
     
      <Route path='/'element={<Home/>}></Route>
      <Route path='/db'element={<Database />}></Route>
      <Route path='/camera'element={<Camera/>}></Route>
      <Route path='/contributors'element={<Contributors/>}></Route>
      <Route path='/contact'element={<Contact/>}></Route>
      <Route path='/upload'element={<Upload/>}></Route>

      
    </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
