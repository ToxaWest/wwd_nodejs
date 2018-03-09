import React, { Component } from 'react';
import Swipe from 'react-easy-swipe';
import Sidebar from "../components/sidebar";
import {connect} from "react-redux";


class Aside extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swipe: -300
        };
        this.onSwipeMove = this.onSwipeMove.bind(this);
        this.onSwipeRight = this.onSwipeRight.bind(this);
        this.onSwipeLeft = this.onSwipeLeft.bind(this);
        this.onSwipeEnd = this.onSwipeEnd.bind(this);
    }

    onSwipeMove(position) {
        const swipePosition = position.x -300;
        // eslint-disable-next-line
        this.state.swipe !== 0 ?
            position.x < 300 ?
                this.setState({swipe: swipePosition})
                : null
            : null
    }

    onSwipeRight() {
        this.setState({swipe: 0})
    }

    onSwipeLeft() {
        this.setState({swipe: -300})
    }

    onSwipeEnd() {
        this.state.swipe > -200 ?
            this.setState({swipe: 0})
            : this.setState({swipe: -300})
    }

    render() {
        return (
            <Swipe
                onSwipeMove={this.onSwipeMove}
                onSwipeLeft={this.onSwipeLeft}
                onSwipeEnd={this.onSwipeEnd}>
                <aside id={'aside'} style={{left : this.state.swipe+'px'}}>
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

export default connect(mapStateToProps)(Aside);