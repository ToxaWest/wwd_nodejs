import React, { Component } from 'react';
import MainSlider from "./slider";
import Services from "./services";
import LastPosts from "./last-posts";

class Home extends Component {

    render() {
        document.title = "Home";
        return (
            <div>
                <div className="home-slider">
                    <MainSlider/>
                </div>
                <Services/>
                <LastPosts/>
            </div>
        );
    }
}

export default Home;
