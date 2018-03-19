import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {SinglePosts} from '../actions/index';

class FooterMenu extends Component {

    render() {

        return (
            <div>
                {this.props.singlePost ?
                    <div className={'back'} onClick={() => this.props.SinglePosts(null)}></div>
                    : null
                    }
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        singlePost:state.singlePost
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({SinglePosts: SinglePosts}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(FooterMenu);
