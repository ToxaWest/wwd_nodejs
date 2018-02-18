import React, { Component } from 'react';
import Slick      from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
    ]
};

class LastPosts extends Component {
    state = {post: []};

    componentDidMount() {
        fetch('/posts')
            .then(res => res.json())
            .then(post => this.setState({ post }));
    }

    render() {
        return (
            <div className="container">
                <Slick {...settings} className="post-slider">
                    {this.state.post.map(post =>
                        <div key={post.id} className="post-single__wrapper">
                            <div className="post-single">
                                <h2><a href={'/portfolio/' + post.id} title={post.title}>{post.title}</a></h2>
                                <div className="post-single__image">
                                    <img src={'/public/content/projects/' + post.images} alt={post.title}/>
                                </div>
                                <div className="post-single__description">
                                    <span>{post.description}</span>
                                </div>
                                <div className="post-single__type">
                                    <span>{post.type}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </Slick>
            </div>
        );
    }
}

export default LastPosts;