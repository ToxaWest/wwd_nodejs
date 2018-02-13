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
            <div className="menu">
                <span>Header menu</span>
                {this.state.menu.map(menu =>
                    <div key={menu.id} className="post-single">
                        <h3><a href={menu.href} title={menu.title}>{menu.href_name}</a></h3>
                    </div>
                )}
            </div>
        );
    }
}

export default Header;
