import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Services from './pages/Services/Services';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import Products from './pages/Products/Products';
import Careers from './pages/Careers/Careers';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/careers' exact component={Careers} />
        <Route path="/contact-us" exact component={ContactUs} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
