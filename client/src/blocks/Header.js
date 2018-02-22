import React, { Component } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import ReactTouchEvents from "react-touch-events";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {mobile_menu: false};
    }

    handleTap () {

        console.log("you have taped me");

    }

    handleSwipe (direction) {

        switch (direction) {
            case "top":
            case "bottom":
            case "left":
            case "right":
            default:
        }
    }
    render() {
        const Logo = <Link to={"/"} ><i className="icon-google-wallet"/><span>WestWD</span></Link>;

        return (
            <ReactTouchEvents
                onTap={ this.handleTap }
                onSwipe={ this.handleSwipe }
            >
            <header className="header-main">
                <div className="logo">
                    {Logo}
                </div>

                    {this.state.mobile_menu ?
                        <nav className="header-wrapper">
                            <Menu/>
                        </nav>
                        : null}

            </header>
            </ReactTouchEvents>
        );
    }
}

export default Header;