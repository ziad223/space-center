import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Subjects from './components/Subjects/Subjects';
import Choose from './components/Choose/Choose';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { useContext } from 'react';
import { darkContext } from './context/ContextProvider';

function App() {

  const {dark , toggleDark} = useContext(darkContext);

  return (
    <div className={dark ? 'app dark' : 'app'}>
     <BrowserRouter>
     <Navbar/>
     <Header/>
     <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/about' element = {<About/>} />
      <Route path = '/subjects' element = {<Subjects/>} />
      <Route path = '/choose' element = {<Choose/>} />
      <Route path = '/contact' element = {<Contact/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
