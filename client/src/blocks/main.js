import React, { Component } from 'react';
import Posts from "../components/posts";

class Main extends Component {

    render() {
        return (
            <main id={'main'}>
                <Posts/>
            </main>
        );
    }
}

export default Main;