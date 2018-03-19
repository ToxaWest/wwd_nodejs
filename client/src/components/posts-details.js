import React, { Component } from 'react';
import {connect} from "react-redux";

class PostsDetails extends Component{
    render (){
        return (
            <div className={!this.props.singlePost ? 'post-details' : 'post-details active'}>
                {this.props.singlePost ?
                    <img src={'content/projects/' + this.props.singlePost.images}/>
                : false}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        singlePost:state.singlePost
    };
}

export default connect(mapStateToProps)(PostsDetails);