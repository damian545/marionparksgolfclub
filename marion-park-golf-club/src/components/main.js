import React from "react";
import { Switch, Route  } from "react-router-dom";

import LandingPage from "./landingpage";
import Greenfees from "./greenfees";
import Contact from "./contact";
import Golf from "./golf";
import ClubSponsors from "./clubsponsors";
import CourseTour from "./coursetour"


const Main = () => (
    <Switch>
        <Route exact path ="/" component ={LandingPage} />
        <Route path ="/greenfees" component ={Greenfees} />
        <Route path ="/contact" component ={Contact} />
        <Route path ="/golf" component ={Golf} />
        <Route path ="/clubsponsors" component ={ClubSponsors} />
        <Route path ="/coursetour" component ={CourseTour} />
    </Switch>
)

export default Main;