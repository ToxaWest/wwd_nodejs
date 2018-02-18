import React, { Component } from 'react';
import MainSlider from "./slider";
import Services from "./services";
import LastPosts from "./last-posts";

class Home extends Component {

    render() {
        document.title = "Home";
        return (
            <main>
                <div className="home-slider">
                    <MainSlider/>
                </div>
                <Services/>
                <LastPosts/>
            </main>
        );
    }
}

export default Home;
