//import logo from './logo.svg';
import './App.css';
import Login from "./containers/Login";
import Register from "./containers/Register";
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import About from './components/Aboutus';
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './components/Error'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={Error} />
          </Switch>  
      <Footer />    
    </div>
  );
}

export default App;
