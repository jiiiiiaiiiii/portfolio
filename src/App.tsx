import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Skill from './Pages/Skill';
import Contact from './Pages/Contact';
import Header from './Components/Header';
import GitHub from './Components/GitHub';
import Footer from './Components/Footer';



function App() {
  return (
    <Router basename='/portfolio'>
      <Header />
      <Switch>
        <Route path='/about'><About /></Route>
        <Route path='/project'><Project /></Route>
        <Route path='/skill'><Skill /></Route>
        <Route path='/contact'><Contact /></Route>
        <Route path='/'><Home /></Route>
      </Switch>
      <Footer />
      {/* <GitHub /> */}
    </Router>
    
  );
}

export default App;


