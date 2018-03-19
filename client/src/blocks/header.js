import React, { Component } from 'react';
import NavBar from '../swg/navbar_mobile.svg';
import {SwipeAside} from "../actions/index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";



class Header extends Component {

    render() {

        return (
            <header id={'header'} className="header-main">
                <div className={'nav-bar'} onClick={()=> this.props.swipeAside ? this.props.SwipeAside(0) : this.props.SwipeAside(-300) }>
                    <img src={NavBar}  alt={'menu'}/>
                </div>
                <span className="title logo">WestWD</span>
            </header>
        );
    }
}

function mapStateToProps (state) {
    return {
        swipeAside: state.aside
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({SwipeAside: SwipeAside}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(Header);