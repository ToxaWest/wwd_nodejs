import React, { Component } from 'react';

class SinglePosts extends Component {

    state = {post: []};

    componentDidMount() {
        fetch('/posts')
            .then(res => res.json())
            .then(post => this.setState({post}));
    }

    render() {

        const currentId = parseInt(this.props.match.params.id, 10);
        const post = this.state.post.filter(post=>{return (post.id === currentId)}).map(post => post);

        return (
            <div>
                {post.map(post =>
                    <div key={post.id} className="post">
                        <h2>{document.title = post.title}</h2>
                        <div className="post-single__image">
                            <img src={'/public/content/projects/' + post.images} alt={post.title}/>
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
        );
    }
}

export default SinglePosts;
