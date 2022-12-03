import logo from './logo.svg';
import './App.css';
import Homepages from "./pages/Homepages";
import Cardetail from "./pages/Cardetail";
import Search from "./pages/Search";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepages/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/cardetail/:id" element={<Cardetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
