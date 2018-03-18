import React, { Component } from 'react';
import FooterMenu from '../components/footer-menu';

class Footer extends Component {

    render() {
        return (
            <footer id={'footer'}>
                <FooterMenu/>
            </footer>
        );
    }
}

export default Footer;