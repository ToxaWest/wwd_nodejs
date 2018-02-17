import React, { Component } from 'react';
import Slick      from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class MainSlider extends Component {
    state = {slider: []};

    componentDidMount() {
        fetch('/slider')
            .then(res => res.json())
            .then(slider => this.setState({ slider }));
    }

    render() {
        return (
            <Slick {...settings}>
                {this.state.slider.map(slider =>
                    <div key={slider.id} className="main-slider" style={{backgroundImage: "url(/public/content/slider/" + slider.img + ")"}}>
                        <div className="main-slider_content">
                            <h3>{slider.caption}</h3>
                        </div>
                    </div>
                )}
            </Slick>
        );
    }
}

export default MainSlider;