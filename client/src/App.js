import React, { Component } from 'react';

class App extends Component {
    state = {post: []}


    componentDidMount() {
        fetch('/posts')
            .then(res => res.json())
            .then(post => this.setState({ post }));
    }

    render() {
        return (
            <div className="App">
                <div className="post">
                    {this.state.post.map(post =>
                        <div className="post-single">
                            <h2><a href={'/post/' + post.id} title={post.title}>{post.title}</a></h2>
                            <div className="post-single__image">
                                <img src={ '/public/content/' + post.images} alt={post.title}/>
                            </div>
                            <div className="post-single__description">
                                <span>{post.description}</span>
                            </div>
                            <div className="post-single__type">
                                <span>{post.type}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
