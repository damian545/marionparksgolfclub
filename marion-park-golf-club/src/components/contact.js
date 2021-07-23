import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
    render() {
        return(
<div style={{width: "100%", margin: "auto"}}>
    <Grid className="landing-grid" style={{height: "100%"}}>
        <Cell col={3}>
        
         <img src="/images/mpgc-badge-img.jpg"             
            style={{ height:"175px", width:"175px", borderRadius: "50%"}}/>
         <br/>
         <br/>
         <Cell className="social-links"><a href="https://google.com/MarionParkGC">
                <i className="fa fa-facebook-square" aria-hidden="true" />
            </a></Cell>
         <img 
         src="/images/mpgc-golf-cart.webp"/>
         <br/>
         <br/>   
          <img 
         src="/images/mpgc-tree.webp"
         style={{height:"300", width:"300px"}}/>
         <br/>
         <br/>   
         <br/>
         <br/>         
            <img src="/images/mpgc-hole1.webp"
         style={{height:"300", width:"300px"}}/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <img src="/images/mpgc-golf-cart2.webp"
         style={{height:"300", width:"300px"}}/>        
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <img src="/images/mpgc-secondhole.webp"
         style={{height:"500", width:"320px"}}/>  
        </Cell>
        <Cell className="contact-right-col" col={9}>
        <div className="banner-text">
        <h1 style={{fontSize: "73px", textAlign:"center", color:"lightgreen"}}>CONTACT US.</h1>
        
        <hr/>
<div style={{textAlign:"center"}}>
<p style={{color:"orange", fontSize:"40px"}}>ADDRESS:</p>
<p>Marion Park Golf Club Inc.</p>
<p>29 Clubhouse Road</p>
<p>Seacliff SA 50</p>
<p>PRO SHOP PHONE: 08 8298 7454</p>
<hr/>
<br/>
<br/>
<p style={{color:"orange", fontSize:"40px"}}>EMAIL:</p>
<p>On-Course Bookings & Queries</p>  
<p>Pro-Shop Email: marion@btmgolf.com.au</p>  
<br/>
<br/>
<p>Club Membership Matters</p>  
<p>Club Email: marionparkgc@gmail.com</p> 
<hr/>
<br/>
<br/>
<p style={{color:"orange", fontSize:"40px"}}>POST:</p>
<p>PO Box 77</p>
<p>Oaklands Park SA 5046</p>
  </div>  
  <hr/>
  <h1 style={{fontSize: "73px", textAlign:"center", color:"lightgreen"}}>OPENING HOURS.</h1>
  <hr/>
  <p style={{color:"orange", fontSize:"40px"}}>Golf Course</p> 
  <hr/>
  <p>Monday</p>  
  <p>Tuesday</p> 
  <p>Wednesday</p>
  <p>Thursday</p>
  <p>Friday</p>
  <p>Saturday</p>
  <p>Sunday</p>
       </div> 
        </Cell>
    </Grid>
    </div>
        );
    }
}

export default Contact;