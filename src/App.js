
import React from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
<Router>

<Nav/>


   
        <Switch>
        
          <Route  exact key="business" path="/business">
          <News category="business"/>
          </Route>
          <Route exact path="/">
          <News key="general" category="general"/>
          </Route>
          <Route exact key="sports" path="/sports">
          <News category="sports"/>
          </Route>
          <Route exact key="tech" path="/tech">
          <News category="technology"/>
          </Route>
          <Route exact key="entertainment" path="/entertainment">
          <News category="entertainment"/>
          </Route>
          
        </Switch>
      
    </Router>

 
 <Footer/>
 
    </>
  );
}

export default App;
