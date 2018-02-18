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
                    <div key={post.id} className="post-page" style={{ backgroundImage: `url(/public/content/projects/${post.images})` }}>
                        <div className="post-single">
                            <h2>{document.title = post.title}</h2>
                            <div className="post-single__description">
                                <span>{post.fulldescription}</span>
                            </div>
                            <div className="post-single__type">
                                <span>{post.type}</span>
                            </div>
                            <div className="post-single__images">
                                <div className="post-single__image">
                                    <h3>Desktop</h3>
                                    <img src={'/public/content/projects/' + post.images} alt={post.title}/>
                                </div>
                                {post.img2 ?
                                    <div className="post-single__image">
                                        <h3>Mobile</h3>
                                        <img src={'/public/content/projects/' + post.img2} alt={post.title}/>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </div>
                        </div>
                )}
            </div>
        );
    }
}

export default SinglePosts;
