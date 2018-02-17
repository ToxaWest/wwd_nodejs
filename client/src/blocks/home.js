import React, { Component } from 'react';
import MainSlider from "./slider";

class Home extends Component {

    render() {
        document.title = "Home";
        return (
            <div className="home-slider">
                <MainSlider/>
            </div>
        );
    }
}

export default Home;
