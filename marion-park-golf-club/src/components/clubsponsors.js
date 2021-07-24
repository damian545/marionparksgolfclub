import React, { Component } from "react";
import { Grid, Cell} from "react-mdl";


class ClubSponsors extends Component {
    render() {
        return(
<div style={{width: "100%", margin: "auto"}}>
    <Grid className="landing-grid" style={{height: "545px"}}>
        <Cell className="clubsponsor" col={12}>
        <div className="banner-text">
        <h1 style={{fontSize: "73px", textAlign:"center", color:"lightyellow"}}>CLUB SPONSORS</h1>

        <hr/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="image">
<img src="/images/mpgc-sponsor1.webp" style={{ height:"150px",width:"245px"}}/>
<img src="/images/mpgc-sponsor2.webp" style={{ height:"150px",width:"245px"}}/>       
<img src="/images/mpgc-sponsor3.webp" style={{ height:"150px",width:"245px"}}/>
<img src="/images/mpgc-sponsor4.webp" style={{ height:"150px",width:"245px"}}/>
<img src="/images/mpgc-sponsor5.webp" style={{ height:"150px",width:"245px"}}/>   
   </div>
        </div> 
        </Cell>
    </Grid>
</div>
        );
    }
}

export default ClubSponsors;