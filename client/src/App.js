import React, { Component } from 'react';
import Header from './blocks/header';
import Posts from './components/posts';
import Footer from "./blocks/footer";
import MainSlider from "./components/slider";
import Services from "./components/services";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <MainSlider />
                <Services />
                <Posts/>
                <Footer/>
            </div>
        );
    }
}

export default App;
