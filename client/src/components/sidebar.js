import React, { Component } from 'react';
import west from '../img/dO2PZb7lWZE.jpg'
import {connect} from "react-redux";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: []
        };
    }
    componentDidMount() {
        this.props.services.then(services => this.setState({services}));
    }

    render() {
        return (
            <div className={'content'}>
                <header>
                    <img src={west} alt={'West'}/>
                    <div className={'header-content'}>
                        <div className={'header-photo'}>
                            <img src={west} alt={'West'}/>
                        </div>
                        <div className={'social'}>
                            <a href="https://vk.com/west07" className={'icon-vk'} title={'West VK'}/>
                            <a href="https://www.facebook.com/west.toxa" className={'icon-facebook'} />
                            <a href="https://www.linkedin.com/in/anton-zakharov-924053147" className={'icon-linkedin'} />
                            <a href="https://vk.com/west07" className={'icon-googleplus'} />
                            <a href="https://www.instagram.com/toxawest/" className={'icon-instagram'} />
                            <a href="mailto:toxawest@gmail.com" className={'icon-gmail'} />
                        </div>
                    </div>
                </header>
                <div className={'services'}>
                    {this.state.services.map(services =>
                        <div key={services.id} className={'services-item'}>
                            <i className={services.usl_ico}/>
                            <div className={'menu'}>{services.title}</div>
                            <input type={'checkbox'} id={'serv' + services.id} name={'serv' + services.id}/>
                            <label htmlFor={'serv' + services.id}/>
                        </div >
                    )}
                </div>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        services: state.services
    }
}

export default connect(mapStateToProps)(Sidebar);