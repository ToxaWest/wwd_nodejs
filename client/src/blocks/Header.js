import React, { Component } from 'react';
import Menu from './Menu';

class Header extends Component {

    render() {
        return (
            <div className="header-main">
                <nav className="header-wrapper">
                    <Menu/>
                </nav>
            </div>
        );
    }
}

export default Header;