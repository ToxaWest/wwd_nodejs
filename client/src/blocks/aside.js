import React, { Component } from 'react';
import Swipe from 'react-easy-swipe';
import Sidebar from "../components/sidebar";
import {connect} from "react-redux";
import {SwipeAside} from "../actions";
import {bindActionCreators} from "redux";


class Aside extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swipe: -300
        };
        this.onSwipeMove = this.onSwipeMove.bind(this);
        this.onSwipeLeft = this.onSwipeLeft.bind(this);
        this.onSwipeEnd = this.onSwipeEnd.bind(this);
    }

    onSwipeMove(position) {
        const swipePosition = position.x -300;
        // eslint-disable-next-line
        this.props.swipe !== 0 ?
            position.x < 300 ?
                this.props.SwipeAside(swipePosition)
                : null
            : null
    }

    onSwipeLeft() {
        this.props.SwipeAside(-300)
    }

    onSwipeEnd() {
        this.props.swipe > -200 ?
            this.props.SwipeAside(0)
            : this.props.SwipeAside(-300)
    }

    render() {
        return (
            <Swipe
                onSwipeMove={this.onSwipeMove}
                onSwipeLeft={this.onSwipeLeft}
                onSwipeEnd={this.onSwipeEnd}>
                <aside id={'aside'} style={{left : this.props.swipe+'px'}}>
                    <Sidebar/>
                </aside>
            </Swipe>
        );
    }
}
function mapStateToProps (state) {
    return {
        swipe: state.aside
    }
}
function matchDispatchToProps (dispatch) {
    return bindActionCreators({SwipeAside: SwipeAside}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(Aside);