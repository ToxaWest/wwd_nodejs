import React, { Component } from 'react';
import Menu from './Menu';

class Header extends Component {

    render() {
        return (
            <div className="header-main">
                <div className="header-wrapper">
                    <Menu/>
                </div>
            </div>
        );
    }
}

export default Header;