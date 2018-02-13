import React, { Component } from 'react';

class Header extends Component {
    state = {menu: []}


    componentDidMount() {
        fetch('/menu')
            .then(res => res.json())
            .then(menu => this.setState({ menu }));
    }

    render() {
        return (
            <div className="header-main">
                <div className="header-wrapper">
                    <ul className="header-menu">
                    {this.state.menu.map(menu =>
                        <li key={menu.id}>
                            <a href={menu.href} title={menu.title}>{menu.href_name}</a>
                        </li>
                    )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
