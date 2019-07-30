import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from './footer/footer-container';
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>



import Home from "./pages/home";
import CompTeams from "./pages/comp-teams";
import Combination from "./pages/combination";
import Gallery from "./pages/gallery";
import News from "./pages/news";
import Contact from "./pages/contact"
import Staff from "./pages/staff"
import ParentPortal from "./pages/parent-portal"

import SeniorProdigy from "./pages/senior-prodigy";
import TeenProdigy from "./pages/teen-prodigy";
import TeenProdigyPrep from "./pages/teen-prodigy-prep";
import JuniorProdigy from "./pages/junior-prodigy";
import SmallProdigy from "./pages/small-prodigy";
import MiniProdigy from "./pages/mini-prodigy";
import TeenPrep from "./pages/teen-prep";
import JuniorPrep from "./pages/junior-prep";
import SmallElite from "./pages/small-elite";
import MiniElite from "./pages/mini-elite";
import JuniorTroupe from "./pages/junior-troupe";
import MiniTroupe from "./pages/mini-troupe";

import TinyTots from "./pages/tiny-tots";
import MiniStars from"./pages/mini-stars";
import JuniorStars from "./pages/junior-stars";
import HipHop from "./pages/hip-hop";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
      
        
        <Router>
          <div className="page-container">
          <NavigationContainer />
            <Switch>  
              <Route exact path='/' component={Home}/>
              <Route path='/comp-teams' component={CompTeams}/>
              <Route path='/combination' component={Combination}/>
              <Route path='/gallery' component={Gallery}/>              
              <Route path='/news' component={News}/>   
              <Route path='/contact' component={Contact}/>      
              <Route path='/staff' component={Staff}/>   
              <Route path='/parent-portal' component={ParentPortal}/>  
              <Route path='/footer-container' component={FooterContainer}/>   
              <Route path='/senior-prodigy' component={SeniorProdigy}/> 
              <Route path='/teen-prodigy' component={TeenProdigy}/> 
              <Route path='/teen-prodigy-prep' component={TeenProdigyPrep}/> 
              <Route path='/junior-prodigy' component={JuniorProdigy}/> 
              <Route path='/small-prodigy' component={SmallProdigy}/> 
              <Route path='/mini-prodigy' component={MiniProdigy}/> 
              <Route path='/teen-prep' component={TeenPrep}/> 
              <Route path='/junior-prep' component={JuniorPrep}/> 
              <Route path='/small-elite' component={SmallElite}/> 
              <Route path='/mini-elite' component={MiniElite}/> 
              <Route path='/junior-troupe' component={JuniorTroupe}/> 
              <Route path='/mini-troupe' component={MiniTroupe}/> 
              <Route path='/tiny-tots' component={TinyTots}/> 
              <Route path='/mini-stars' component={MiniStars}/> 
              <Route path='/junior-stars' component={JuniorStars}/> 
              <Route path='hip-hop' component={HipHop}/> 
            </Switch> 
          </div>          
        </Router>  
        <div className='footer'>
        <FooterContainer/>

        </div >
        
      </div>
    );
  }
}
