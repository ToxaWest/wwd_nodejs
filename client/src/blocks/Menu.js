import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    state = {menu: []};

    componentDidMount() {
        fetch('/main_menu')
            .then(res => res.json())
            .then(menu => this.setState({ menu }));
    }

    render() {
        const currentId = decodeURIComponent(window.location.pathname);
        return (
            <ul className="header-menu">
                {this.state.menu.map(menu =>
                    <li key={menu.id} className={menu.href === currentId ? 'active': null}>
                        <Link to={menu.href} title={menu.title} >{menu.href_name}</Link>
                    </li>
                )}
            </ul>
        );
    }
}

export default Menu;