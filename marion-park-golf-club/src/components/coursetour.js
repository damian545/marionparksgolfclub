import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class CourseTour extends Component {
    render() {
        return(
<div style={{width: "100%", margin: "auto"}}>
    <Grid className="landing-grid" style={{height: "545px"}}>
        <Cell col={3}>
        <img 
         src=""/>
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
        <Cell className="contact-right-col" col={9}>
        <div className="banner-text">
        <h1 style={{fontSize: "73px", textAlign:"center", color:"lightyellow"}}>COURSE TOUR.</h1>

        <hr/>
<div className="course-images">

</div>
        

        
        </div> 
        </Cell>
    </Grid>
    </div>
        );
    }
}

export default CourseTour;