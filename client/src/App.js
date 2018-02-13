import React, { Component } from 'react';
import Header from './blocks/Header';
import Posts from './blocks/posts';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Posts/>
            </div>
        );
    }
}

export default App;
