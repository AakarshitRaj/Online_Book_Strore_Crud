import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Books } from './pages/Books';
import { AddBooks } from './pages/AddBooks';
import { Footer } from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/books' element={<Books/>}/>
      <Route exact path='/addBooks' element={<AddBooks/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
