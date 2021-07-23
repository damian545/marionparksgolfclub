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
        <Header className="header-color" title={<Link style={{ textDecoration: "none", color: "lightyellow" }} to="/">
            Marion Park Golf Club Inc.
          </Link>}>            
            <Navigation>
                <Link to="/golf" style={{fontSize:"20px"}}>Golf</Link>
                <Link to="/greenfees" style={{fontSize:"20px"}}>Green Fees</Link>
                <Link to="/contact" style={{fontSize:"20px"}}>Contact</Link>
                <Link to="/clubsponsors" style={{fontSize:"20px"}}>Club Sponsors</Link>
                <Link to="/coursetour" style={{fontSize:"20px"}}>Course Tour</Link>
            </Navigation>
        </Header>
        <Drawer title="Marion Parks Golf Club Inc.">
            <Navigation>
                <Link to="/golf" style={{fontSize:"20px"}} >Golf</Link>
                <Link to="/greenfees" style={{fontSize:"20px"}}>Green Fees</Link>
                <Link to="/contact" style={{fontSize:"20px"}}>Contact</Link>
                <Link to="/clubsponsors" style={{fontSize:"20px"}}>Club Sponsors</Link>
                <Link to="/coursetour" style={{fontSize:"20px"}}>Course Tour</Link>
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