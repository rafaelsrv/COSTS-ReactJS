import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layouts/Container';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Detalhes from './components/pages/Detalhes';




function App() {
  return (
    
      
<Router>
  <Navbar/>



<Container customClass="min-height">
<Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/company' element={<Company />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/newproject' element={<NewProject />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/project/:id' element={<Project />} />
        <Route exact path='/detalhes' element={<Detalhes />} />
</Routes>
</Container>


<Footer/>
</Router>
    
  );
}

export default App;
