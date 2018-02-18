import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0,
    isFitWidth: true
};

class Posts extends Component {
    state = {post: [], count: 6, currentType: '*',services:[]};

    componentDidMount() {
        fetch('/posts')
            .then(res => res.json())
            .then(post => this.setState({post}));
        fetch('/services')
            .then(res => res.json())
            .then(services => this.setState({services}));
    }

    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
        this.ChangeType = this.ChangeType.bind(this);
    }
    loadMore() {
        this.setState({count:this.state.count+6})
    }

    ChangeType(event){
        this.setState({currentType:event.target.value});
    }

    CurrentType(posts) {
        if (this.state.currentType === '*') {
            return posts.type === posts.type
        }
        else {
            return posts.type === this.state.currentType
        }
    }

    render() {
        document.title = "Posts";
        const posts = this.state.post.filter(posts=>this.CurrentType(posts)).slice( 0, this.state.count).map(post =>
            <div key={post.id} className="post-single">
                <h2><a href={'/portfolio/' + post.id} title={post.title}>{post.title}</a></h2>
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
        );
        return (
            <div className="post container">
                <select onChange={this.ChangeType}>
                    <option value='*'>All</option>
                    {this.state.services.map(services =>
                        <option key={services.id} value={services.title}>{services.title}</option>
                    )}
                </select>
                <Masonry
                className={'post-wrapper'}
                elementType={'div'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={true}
            >
                {posts}
            </Masonry>
                {this.state.count < this.state.post.length ?
                <button onClick={this.loadMore}>Load more</button>
                : null }
            </div>
        );
    }
}

export default Posts;
