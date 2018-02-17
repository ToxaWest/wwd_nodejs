import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './blocks/Header';
import Posts from './blocks/posts';
import Footer from "./blocks/footer";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path='/portfolio' component={Posts}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
