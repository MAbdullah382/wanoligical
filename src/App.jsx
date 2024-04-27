
import './App.css'
import Aboutmain from './components/about/Aboutmain';
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Servicemain from './components/service/Servicemain';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Aboutmain />} />
          <Route exact path="/service" element={<Servicemain />} />
        </Routes>
      </Router >


    </>
  )
}

export default App
