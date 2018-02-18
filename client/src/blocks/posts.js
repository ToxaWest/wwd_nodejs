import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

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
        return  posts.type ===
            (this.state.currentType === '*'
                ?   posts.type
                :   this.state.currentType
            )
    }

    render() {
        document.title = "Posts";
        const posts =
            this.state.post
                .filter(posts=>this.CurrentType(posts))
                .reverse()
                .slice( 0, this.state.count)
                .map(post =>
                    <div key={post.id}  className="post-single__matrix">
                        <div className="post-single">
                            <h2><Link to={'/portfolio/' + post.id} title={post.title}>{post.title}</Link></h2>
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
                    </div>
                );
        const select =
            <select className="select" onChange={this.ChangeType}>
                <option value='*'>All</option>
                {this.state.services.map(services =>
                        <option key={services.id} value={services.title}>{services.title}</option>
                )}
                </select>;
        const LoadMoreButton =
            this.state.count < this.state.post.length
            ? <button onClick={this.loadMore}>Load more</button>
            : null ;

        const description = <span className="description">{this.state.services
                                .filter(services=>{
                                    return services.title === this.state.currentType
                                })
                                .map(services => services.description)}
                            </span>;
        return (
            <div className="post container">
                {select}
                {description}
                <Masonry
                    className={'post-wrapper'}
                    elementType={'div'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={true}
                >
                    {posts}
                </Masonry>
                {LoadMoreButton}
            </div>
        );
    }
}

export default Posts;
