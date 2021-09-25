import React, { Component } from 'react';
import Navbar from './components/pages/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Neurodiversity from './components/pages/Neurodiversity';
import Resources from './components/pages/Resources';
import ContactUs from './components/pages/ContactUs';
import Autism from './components/pages/Autism';
import Adhd from './components/pages/Adhd';
import Bipolar from './components/pages/Bipolar';
import Tourette from './components/pages/Tourette';
import Dyslexia from './components/pages/Dyslexia';
import Footer from './components/pages/Footer';
import Face from './components/Api/Face';
import Api from './components/Api/Api';
import Voicetotext from './components/pages/Voicetotext';
import Speechapp from './components/pages/Speechapp';
// import { render } from '@testing-library/react';


class App extends Component {
  

  
  render() {
    return (
 
  

 <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/neurodiversity' component={Neurodiversity} />
        <Route path='/resources' component={Resources} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/autism' component={Autism} />
        <Route path='/adhd' component={Adhd} />
        <Route path='/bipolar' component={Bipolar} />
        <Route path='/tourette' component={Tourette} />
        <Route path='/dyslexia' component={Dyslexia} />
        <Route path='/face' component={Face} />
        <Route path='/footer' component={Footer} />
        <Route path='/voicetotext' component={Voicetotext} />
        <Route path='/speechapp' component={Speechapp} />
        <Route path='/api' component={Api} />
      </Switch>
    
    </Router>


  
 
   
    );
  }
}
   

  
export default App;
