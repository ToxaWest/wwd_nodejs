import React, { Component } from 'react';
import NavBar from '../swg/navbar_mobile.svg';



class Header extends Component {

    constructor(props) {
        super(props);
        this.MobileMenu = this.MobileMenu.bind(this);
    }

    MobileMenu(){
        console.log('hi');
    }

    render() {

        return (
            <header id={'header'} className="header-main">
                <div className={'nav-bar'} onClick={this.MobileMenu}>
                    <img src={NavBar}  alt={'menu'}/>
                </div>
                <span className="title logo">WestWD</span>
            </header>
        );
    }
}

export default Header;