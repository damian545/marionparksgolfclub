import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";



class Landing extends Component {
    render() {
        return(
<div style={{width: "100%", margin: "auto"}}>
    <Grid className="landing-grid" style={{height: "545px"}}>
        <Cell col={12}>
            <img           
            src="/images/mpgc-homepage-img.webp"            
            alt="homepage picture"
            style={{ height: "527px", width: "100%" }}
            />
             <img src="/images/mpgc-badge-img.jpg"
             class="badge"
            style={{ height:"175px", width:"175px", borderRadius: "50%"}}/>
        </Cell>
    </Grid>
</div>
        );
    }
}

export default Landing;