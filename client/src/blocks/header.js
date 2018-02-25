import React, { Component } from 'react';
import Menu from '../components/menu';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {mobileMenu: false};
        this.MobileMenu = this.MobileMenu.bind(this);
    }

    MobileMenu(){
        this.state.mobileMenu ?
        this.setState({mobileMenu:false }):
            this.setState({mobileMenu:true })

    }

    render() {
        const Logo = <a href={"/"} ><i className="icon-google-wallet"/><span>WestWD</span></a>;

        return (
            <header className="header-main">
                <div className="logo">
                    {Logo}
                </div>
                <i className={this.state.mobileMenu ? "icon-menu active " : "icon-menu"} onClick={this.MobileMenu}/>
                {this.state.mobileMenu ?
                    <nav className="header-wrapper">
                        <Menu/>
                    </nav>
                    : null}
            </header>
        );
    }
}

export default Header;