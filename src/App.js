import { useRef, useEffect, useState, createContext } from 'react';
import { useInView } from 'react-intersection-observer';
import './App.scss';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import AboutMe from './Component/AboutMe';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from './Component/Contact';

function App() {

  const { ref, inView, entry } = useInView();
  
  // const AppContext = createContext();
  const [activeNode, setActiveNode] = useState();
  let x = 5;

  return (
    <div>
      <Navbar />
      <Header />
      <h1 ref={ref}>{!inView ? 'Not In View' : 'In View'}</h1>
      <AboutMe observer={ref} />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
