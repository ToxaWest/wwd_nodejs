import React, { Component } from 'react';
import {connect} from "react-redux";

class PostsDetails extends Component{
    render (){
        if(!this.props.singlePost){
            return false
        }
        return (
            <div >
                <img src={'content/projects/' + this.props.singlePost.images} />
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