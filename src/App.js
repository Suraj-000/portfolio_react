
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact'


import { Link as ScrollLink, Element } from 'react-scroll';


function App() {
  return (
 <>

<Element name="navbar" className="element"> <Navbar /> </Element>
    <Element name="homeSection" className="element"> <Home /> </Element>
    <Element name="Projects" className="element"> <Projects /> </Element>
    <Element name="Experience" className="element"> <Experience /> </Element>
    <Element name="Contact" className="element"> <Contact /> </Element>



 </>
  );
}

export default App;
