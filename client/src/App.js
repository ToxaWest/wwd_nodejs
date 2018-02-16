import React, { Component } from 'react';
import Header from './blocks/Header';
import Posts from './blocks/posts';
import Footer from "./blocks/footer";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div onClick={this.handleClick}>hide</div>
                { this.state.isToggleOn ? <Posts /> : null }
                <Footer/>
            </div>
        );
    }
}

export default App;
