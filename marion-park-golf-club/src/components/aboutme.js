import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class About extends Component {
    render() {
        return(
<div style={{width: "100%", margin: "auto"}}>
    <Grid className="landing-grid" style={{height: "545px"}}>
    <Cell className="aboutme-left-col" col={3}>
         <img 
         src="/images/mpgc-golf-cart.webp"/>
         <br/>
         <br/>
         <img src="/images/mpgc-badge-img.jpg"             
            style={{ height:"175px", width:"175px", borderRadius: "50%"}}/>
         <br/>
         <br/>
         <Cell className="social-links"><a href="https://google.com/MarionParkGC">
                <i className="fa fa-facebook-square" aria-hidden="true" />
            </a></Cell>
            
        </Cell>
        <Cell className="aboutme-right-col" col={9}>
        <div className="banner-text">
        <h1 style={{fontFamily: "Lobster, cursive", fontSize: "73px", textAlign:"center"}}>WELCOME!</h1>

        <hr/>

        <p style={{textAlign:"center"}}>
​

Established in 1980 by a group of southern suburb locals who wanted to play in club without the high costs and with a friendly and social atmosphere, the Marion Park Golf Club continues to provide all the benefits of larger golf club memberships but without the high cost commitment or lack of flexibility.

​

Over the decades, the club has provided hundreds an opportunity as members to have a recognised Australian handicap, play competitive golf at one of Adelaide's most picturesque locations.

​

The course boasts lush green fairways, rough where rough should be and greens which are firm yet consistent throughout. Weekly 18 hole competitions run on Saturdays using the alternate tee blocks on the competitive 9 hole layout for both Men and Women.

 

Off the "Blues", shooting Par is a true challenge even for a player off scratch and it’s not because of the course condition, rather the testing layout.

​

The undulating fairways offer a unique experience but not an exhausting one. Having electric golf carts to hire makes it even easier to get around, if you don't want to walk it.

The 270 degree views of the coast line and Adelaide plains are simply spectacular and make the course unique for such an accessible and local location.</p>

        
        </div> 
        </Cell>
    </Grid>
</div>
        );
    }
}

export default About;