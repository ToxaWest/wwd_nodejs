import React, { Component } from 'react';
import MainSlider from "./slider";
import Services from "./services";

class Home extends Component {

    render() {
        document.title = "Home";
        return (
            <div>
                <div className="home-slider">
                    <MainSlider/>
                </div>
                <Services/>
            </div>
        );
    }
}

export default Home;
