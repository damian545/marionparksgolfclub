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
                <Link to="/golf">Golf</Link>
                <Link to="/aboutme">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/clubsponsors">Club Sponsors</Link>
            </Navigation>
        </Header>
        <Drawer title="Marion Parks Golf Club Inc">
            <Navigation>
                <Link to="/golf">Golf</Link>
                <Link to="/aboutme">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/clubsponsors">Club Sponsors</Link>
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