import React, { Component } from 'react';
import Posts from "../components/posts";
import PostsDetails from "../components/posts-details";

class Main extends Component {

    render() {
        return (
            <main id={'main'}>
                <Posts/>
                <PostsDetails/>
            </main>
        );
    }
}

export default Main;