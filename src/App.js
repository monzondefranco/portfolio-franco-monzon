import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer';
import About from './pages/About/index'
import NavBar from './components/NavBar';
import Skills from './pages/Skills';
import Contact from '../src/pages/Contact'
import './App.css'


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
