import React from "react";
import { Switch, Route  } from "react-router-dom";

import LandingPage from "./landingpage";
import Aboutme from "./aboutme";
import Contact from "./contact";
import Golf from "./golf";
import ClubSponsors from "./clubsponsors";


const Main = () => (
    <Switch>
        <Route exact path ="/" component ={LandingPage} />
        <Route path ="/aboutme" component ={Aboutme} />
        <Route path ="/contact" component ={Contact} />
        <Route path ="/golf" component ={Golf} />
        <Route path ="/clubsponsors" component ={ClubSponsors} />
    </Switch>
)

export default Main;