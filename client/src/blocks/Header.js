import React, { Component } from 'react';
import Menu from './Menu';

class Header extends Component {

    render() {
        return (
            <header className="header-main">
                <nav className="header-wrapper">
                    <Menu/>
                </nav>
            </header>
        );
    }
}

export default Header;