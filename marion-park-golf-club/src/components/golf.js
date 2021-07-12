import React, { Component } from "react";
import { Grid, Cell} from "react-mdl";


class Golf extends Component {
    render() {
        return(
<div style={{width: "100%", margin: "auto"}}>
    <Grid className="landing-grid">
        <Cell col={2}>
         
        </Cell>
        <Cell className="golf-right-col" col={10}> 
        
       <h1 style={{fontSize:"46px"}}>Benefits of joining Marion Park Golf Club</h1> 
​​

<p>We have a challenging 9 Hole Golf Course which is located on the top of the hill in Seacliff looking over stunning coastal views and caters for all levels of playing ability.</p>

<p>There is a good mix of competitive and social golf including mixed and 18 Hole events.</p>

<p>We have competitively priced 5 and 7 day or pay as you play  memberships available.</p>

<p>There is an excellent well equipped Pro-Shop run by professional staff.</p>

<p>We have an agreed selection of prime dedicated times available for our Members on our Wednesday and Saturday competitions.</p>

<p>Discounted green fees are available to all members.</p>

<p>Clubhouse is available to hire for private functions. </p>

<p>The club house is licenced to sell alcoholic beverage to members and public.</p>

<p>SA Public Courses Pennant Competition representation</p>
        
        </Cell>
    </Grid>
</div>
        );
    }
}

export default Golf;