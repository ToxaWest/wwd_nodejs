import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {SinglePosts} from '../actions/index';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: []
        };
    }
    componentDidMount() {
        this.props.post.then(post => this.setState({post}));
    }

    render() {

        const posts = this.state.post.map(post =>
                    <div key={post.id} className="post-single">
                        <img src={'/content/projects/' + post.images} alt={post.title}/>
                        <div className={'post-single_content'}>
                            <div className={'text'}>
                                <h2 className={'headline'}>{post.title}</h2>
                                <div className="body1">{post.type}</div>
                            </div>
                            <div className={'actions'}>
                                <a href={post.link} className={'btn2'}>Live</a>
                                <a className={'btn2'} onClick={()=> this.props.SinglePosts (post)}>Read more</a>
                            </div>
                        </div>
                    </div>
                );

        return (
            <div className={this.props.singlePost ? 'post active' : 'post'}>
                {posts}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        post: state.post,
        singlePost:state.singlePost
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({SinglePosts: SinglePosts}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(Posts);
