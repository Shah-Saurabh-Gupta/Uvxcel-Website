import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Services from './pages/Services/Services';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import Test from './pages/Test/Test';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path='/services' exact component={Services} />
        <Route path="/contact-us" exact component={ContactUs} />
      </Switch>
      <Footer />
      <Test />
    </Router>

  );
}

export default App;
