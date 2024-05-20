import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

interface SliderProps {
    data: {
        sliderText1: string;
        sliderSubText1: string;
        sliderButton1: string;
    };
}

const Slider: React.FC<SliderProps> = ({ data }) => {
    return (
        <section id="home" className="slider-area fix p-relative">
            <Carousel fade>
                <Carousel.Item>
                    <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: 'url(img/slider/slider_img01.jpg)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="slider-content s-slider-content text-left">
                                        <h2>{data.sliderText1}</h2>
                                        <ul>
                                            <li>
                                                <i className="fas fa-bed"></i>
                                                <span>3 Bedrooms.</span>
                                            </li>
                                            <li>
                                                <i className="fal fa-pencil-ruler"></i>
                                                <span>Square Feet </span>
                                            </li>
                                            <li>
                                                <i className="fas fa-bath"></i>
                                                <span>Bedrooms</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-car"></i>
                                                <span>Car parking</span>
                                            </li>
                                        </ul>
                                        <div className="slider-btn mt-55">
                                            <Button variant="primary">{data.sliderButton1}</Button>
                                            <a href="https://www.youtube.com/watch?v=vKSA_idPZkc" className="video-i popup-video" style={{ animationDelay: '0.8s' }} tabIndex="0"><i className="fas fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="slider-price">
                                        <h3>Price:</h3>
                                        <h2>$1,786.80</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: 'url(img/slider/slider_img02.jpg)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="slider-content s-slider-content text-left">
                                        <h2>{data.sliderText1}</h2>
                                        <ul>
                                            <li>
                                                <i className="fas fa-bed"></i>
                                                <span>3 Bedrooms.</span>
                                            </li>
                                            <li>
                                                <i className="fal fa-pencil-ruler"></i>
                                                <span>Square Feet </span>
                                            </li>
                                            <li>
                                                <i className="fas fa-bath"></i>
                                                <span>Bedrooms</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-car"></i>
                                                <span>Car parking</span>
                                            </li>
                                        </ul>
                                        <div className="slider-btn mt-55">
                                            <Button variant="primary">{data.sliderButton1}</Button>
                                            <a href="https://www.youtube.com/watch?v=vKSA_idPZkc" className="video-i popup-video" style={{ animationDelay: '0.8s' }} tabIndex="0"><i className="fas fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="slider-price">
                                        <h3>Price:</h3>
                                        <h2>$2,786.80</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Slider;
