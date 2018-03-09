import React, { Component } from 'react';
import '../css/style.css';
import Header from './header';
import Main from "./main";
import Footer from "./footer";
import Aside from './aside';


class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Aside/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
