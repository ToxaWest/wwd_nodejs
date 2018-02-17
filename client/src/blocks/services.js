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
            <div className="container">
                {this.state.services.map(services =>
                    <div key={services.id} className="services_content">
                        <h3>{services.title}</h3>
                        {services.usl_ico}
                        <div className="services_descript">
                            {services.description}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Services;