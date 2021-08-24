import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
    render(){
        return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{ textDecoration: "none", color: "lightyellow", fontSize:"25px" }} to="/">
            Marion Park Golf Park Inc.
          </Link>}>            
            <Navigation>
                <Link to="/golf" style={{fontSize:"20px", color:"lime"}}>Golf</Link>
                <Link to="/greenfees" style={{fontSize:"20px", color:"lime"}}>Green Fees</Link>
                <Link to="/contact" style={{fontSize:"20px", color:"lime"}}>Contact</Link>
                <Link to="/clubsponsors" style={{fontSize:"20px", color:"lime"}}>Club Sponsors</Link>
                <Link to="/coursetour" style={{fontSize:"20px", color:"lime"}}>Course Tour</Link>
            </Navigation>
        </Header>
        <Drawer title="Marion Parks Golf Course.">
            <Navigation>
                <Link to="/golf" style={{fontSize:"20px", color:"lime"}} >Golf</Link>
                <Link to="/greenfees" style={{fontSize:"20px", color:"lime"}}>Green Fees</Link>
                <Link to="/contact" style={{fontSize:"20px", color:"lime"}}>Contact</Link>
                <Link to="/clubsponsors" style={{fontSize:"20px", color:"lime"}}>Club Sponsors</Link>
                <Link to="/coursetour" style={{fontSize:"20px", color:"lime"}}>Course Tour</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
        );
        
    }
}

export default App;