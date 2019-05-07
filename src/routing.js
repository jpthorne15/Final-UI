import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home"
import Form from "./Images/image"




function Routing() {
  return (
    <Router>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/images" component={Form} />
  </Switch>
    </Router>
    
  );
}
export default Routing