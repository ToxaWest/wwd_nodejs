import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    state = {menu: [], posts:[]};

    componentDidMount() {
        fetch('/main_menu')
            .then(res => res.json())
            .then(menu => this.setState({ menu }));
        fetch('/posts')
            .then(res => res.json())
            .then(posts => this.setState({ posts }));
    }

    render() {
        const currentId = decodeURIComponent(window.location.pathname);
        return (
            <ul className="header-menu">
                {console.log(currentId)}
                {this.state.menu.map(menu =>
                    <li key={menu.id} className={menu.href === currentId ? 'active': null}>
                        <Link to={menu.href} title={menu.title} >{menu.href_name}</Link>
                            {menu.href === '/portfolio'
                                ?
                                <div className="sublink">
                                    {this.state.posts.map(posts =>
                                        <Link to={'/portfolio/' + posts.id} key={posts.id} title={posts.title} >{posts.title}</Link>
                                    )}
                                </div>
                                :
                                null
                            }
                    </li>
                )}
            </ul>
        );
    }
}

export default Menu;