import React, {Component} from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import NavBar from "../components/NavBar";

class MainContainer extends Component {
    state = {
        currentPage: "About"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page});
    };

    renderPage = () => {
        switch (this.state.currentPage){
            case "About":
            return <About/>;
            case "Contact":
            return <Contact/>;
            case "Portfolio":
            return <Portfolio/>;
            default:
            return <About/>;
        }
    };

    render(){
        <div>
            <NavBar/>
            {this.renderPage()}
        </div>
    }
}

export default MainContainer;