import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './blocks/Header';
import Posts from './blocks/posts';
import Footer from "./blocks/footer";
import Home from "./blocks/home";
import SinglePosts from "./blocks/single-post";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path='/portfolio' component={Posts}/>
                    <Route path='/portfolio/:id' component={SinglePosts}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
