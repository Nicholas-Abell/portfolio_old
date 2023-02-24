import { createContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.scss';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import AboutMe from './Component/AboutMe';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
export const AppContext = createContext(null);

function App() {
  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView();
  const { ref: skillsRef, inView: skillsInView } = useInView();
  const { ref: projectsRef, inView: projectsInView } = useInView();
  const { ref: contactRef, inView: contactInView } = useInView();

  return (
    <div>
      <AppContext.Provider value={{ FontAwesomeIcon }}>
        <Navbar headerInView={headerInView} aboutMeInView={aboutMeInView} skillsInView={skillsInView} projectsInView={projectsInView} contactInView={contactInView} />
        <Header headerRef={headerRef} />
        <AboutMe aboutMeRef={aboutMeRef} />
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
