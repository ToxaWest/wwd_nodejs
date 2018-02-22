import React, { Component } from 'react';

class Services extends Component {
    state = {services: []};

    componentDidMount() {
        fetch('/services')
            .then(res => res.json())
            .then(services => this.setState({ services }));
    }

    render() {
        return (
            <div className="container services">
                {this.state.services.map(services =>
                    <div key={services.id} className="services_content">
                        <i className={services.usl_ico}/>
                        <h3>{services.title}</h3>
                    </div>
                )}
            </div>
        );
    }
}

export default Services;