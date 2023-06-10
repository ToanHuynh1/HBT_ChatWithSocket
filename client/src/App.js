import './App.scss';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Header from './components/header/Header.js';
import About from './components/about/About';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>

      <Header/>

        <div className="App">
          <Routes>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </div>

        <Footer/>

    </Router>
  );
}

export default App;
