import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Greenfees extends Component {
    render() {
        return(
<div style={{width: "100%", margin: "auto"}}>
    <Grid className="landing-grid" style={{height: "100%"}}>
    <Cell className="aboutme-left-col" col={3}>
         <img 
         src="/images/mpgc-tree.webp"
         style={{height:"300", width:"300px"}}/>
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
        <h1 style={{fontSize: "53px", textAlign:"center", color:"lightyellow"}}>Green Fees</h1>

        <hr/>

        
<p>Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;($12 All day except Public Holidays)</p>

<p className="gap"></p>

<p className="gap"></p>

<p className="gap"></p>

<p className="gap"></p>

<p className="gap"></p>

<p className="gap"></p>

<p className="gap"></p>

<p className="gap"></p>
        

        
        </div> 
        </Cell>
    </Grid>
</div>
        );
    }
}

export default Greenfees;