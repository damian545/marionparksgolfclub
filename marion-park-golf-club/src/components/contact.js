import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
    render() {
        return(
<div style={{width: "100%", margin: "auto"}}>
    <Grid className="landing-grid" style={{height: "100%"}}>
        <Cell col={3}>
        <div className="fixed">
         <img src="/images/mpgc-badge-img.jpg"             
            style={{ height:"175px", width:"175px", borderRadius: "50%"}}/>
         <br/>
         <br/>
         <Cell className="social-links"><a href="https://google.com/MarionParkGC">
                <i className="fa fa-facebook-square" aria-hidden="true" />
            </a></Cell>
         <img 
         src="/images/mpgc-golfclubs.webp"
         style={{height:"200px", width:"250px"}}/>
         <br/>
         <br/>        
         <p>An Original Website Created By Damian Tapp</p>
         <br/>
         <br/>
         <br/>
         <br/>   
         </div>        
        </Cell>
        <Cell className="contact-right-col" col={9}>
        <div className="banner-text">
        <h1 style={{fontSize: "73px", textAlign:"center", color:"lightgreen"}}>CONTACT</h1>
        
        <hr/>
<div style={{textAlign:"center"}}>
<p style={{color:"orange", fontSize:"40px"}}>ADDRESS:</p>
<hr style={{borderTop:"2px solid lightyellow", width:"50%"}}/>
<p>Marion Park Golf Club Inc.</p>
<p>29 Clubhouse Road</p>
<p>Seacliff SA 50</p>
<hr style={{borderTop:"2px solid lightyellow", width:"50%"}}/>
<p>PRO SHOP PHONE:</p><p style={{fontSize:"35px", color:"red"}}> 08 8298 7454</p>
<hr/>
<br/>
<br/>
<p style={{color:"orange", fontSize:"40px"}}>EMAIL:</p>
<hr style={{borderTop:"2px solid lightyellow", width:"50%"}}/>
<p>On-Course Bookings & Queries</p>  
<a style={{fontSize:"25px", color:"lightyellow"}} href="https://hotmail.com/marion@btmgolf.com.au" >Pro-Shop Email: marion@btmgolf.com.au</a>  
<br/>
<br/>
<hr style={{borderTop:"2px solid lightyellow", width:"50%"}}/>
<br/>
<p>Club Membership Matters</p>  
<a style={{fontSize:"25px", color:"lightyellow"}} href="https://hotmail.com/marionparkgc@gmail.com">Club Email: marionparkgc@gmail.com</a> 
<br/>
<br/>
<hr/>
<br/>
<br/>
<p style={{color:"orange", fontSize:"40px"}}>POST:</p>
<hr style={{borderTop:"2px solid lightyellow", width:"50%"}}/>
<p>PO Box 77</p>
<p>Oaklands Park SA 5046</p>
  </div>  
  <hr/>
  <h1 style={{fontSize: "73px", textAlign:"center", color:"lightgreen"}}>OPENING HOURS</h1>
  
  <p style={{color:"orange", fontSize:"40px"}}>&nbsp;Golf Course:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Club Rooms:</p> 
  <hr/>
  <p>Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7:30AM - 6:00PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8:00AM - 12:00PM</p>  
  <p>Tuesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7:30AM - 6:00PM</p> 
  <p>Wednesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7:30AM - 6:00PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7:00AM - 3:00PM</p>
  <p>Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7:30AM - 6:00PM</p>
  <p>Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7:30AM - 6:00PM</p>
  <p>Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6:30AM - 6:00PM</p>
  <p>Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6:30AM - 6:00PM</p>
  <hr/>
  <h1 style={{fontSize: "73px", textAlign:"center", color:"lightgreen"}}>GOLF SHOP</h1>
  <hr/>
  <p style={{color:"orange", fontSize:"40px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Golf Shop:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lessons & Coaching:</p> 
  <hr/>
  <p>Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7:30AM - 6:00PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Regular coaching and private lessons</p>  
  <p>Tuesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7:30AM - 6:00PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;taught by BTM's Pro are an important</p> 
  <p>Wednesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7:30AM - 6:00PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aspect of keeping on top of your game.</p>
  <p>Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7:30AM - 6:00PM</p>
  <p>Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7:30AM - 6:00PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact the pro shop for further information.</p>
  <p>Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6:30AM - 6:00PM</p>
  <p>Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6:30AM - 6:00PM</p>
       </div> 
        </Cell>
    </Grid>
    </div>
        );
    }
}

export default Contact;