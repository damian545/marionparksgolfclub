import React, { Component } from "react";
import { Grid, Cell} from "react-mdl";


class Golf extends Component {
    render() {
        return(
<div style={{width: "100%", margin: "auto"}}>
    <Grid className="landing-grid">
        <Cell className="golf-left-col" col={3}>
         <img 
         src="/images/mpgc-golf-team.webp"/>
         <br/>
         <br/>
         <br/>
         <img 
         src="/images/mpgc-golf-team2.webp"/>
         <br/>
         <br/>
         <div className="images">
         <img src="/images/mpgc-team1.webp"/>
         <br/>
         <br/>         
         <img src="/images/mpgc-team2.webp"/>
         </div>
        </Cell>
        <Cell className="golf-right-col" col={9}> 
        
       <h1 className="heading" style={{fontSize: "53px", textAlign:"center", color:"lightgreen"}}>Benefits of joining Marion Park Golf Club</h1> ​​
<hr style={{borderTop:"5px dotted lightyellow"}}/>
<br/>
<br/>
<ul>
<li><p><span class="dot"></span>We have a challenging 9 Hole Golf Course which is located on the top of the hill in Seacliff looking over stunning coastal views and caters for all levels of playing ability.</p></li>

<li><p><span class="dot"></span>There is a good mix of competitive and social golf including mixed and 18 Hole events.</p></li>

<li><p><span class="dot"></span>We have competitively priced 5 and 7 day or pay as you play  memberships available.</p></li>

<li><p><span class="dot"></span>There is an excellent well equipped Pro-Shop run by professional staff.</p></li>

<li><p><span class="dot"></span>We have an agreed selection of prime dedicated times available for our Members on our Wednesday and Saturday competitions.</p></li>

<li><p><span class="dot"></span>Discounted green fees are available to all members.</p></li>

<li><p><span class="dot"></span>Clubhouse is available to hire for private functions. </p></li>

<li><p><span class="dot"></span>The club house is licenced to sell alcoholic beverage to members and public.</p></li>

<li><p><span class="dot"></span>SA Public Courses Pennant Competition representation</p></li>
   </ul>     
        </Cell>
    </Grid>
</div>
        );
    }
}

export default Golf;