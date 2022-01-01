import { HashRouter, Routes, Route } from 'react-router-dom'


import Layout from './layout/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Kitchen from './components/Kitchen'
import Bathroom from './components/Bathroom'
import Interiors from './components/Interiors'
import Project from './components/Project'
import Grill from './components/Grill'
import Pool from './components/Pool'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'

function App() {

  return (
    <HashRouter>
      <Layout/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Project/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/kitchen" element={<Kitchen/>} />
          <Route path="/bathroom" element={<Bathroom/>} />
          <Route path="/Interiors" element={<Interiors/>} />
          <Route path="/gril-paver" element={<Grill/>} />
          <Route path="/pool" element={<Pool/>} />
        </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App
