import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import {CommonProps} from "../types/globalTypes.ts";


const Slider: React.FC<CommonProps> = ({ data, driveUrl }) => {
    const renderCarouselItem = (image: string) => (
        <Carousel.Item>
            <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: `url(${driveUrl}${image})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="slider-content s-slider-content text-left">
                                <h2>{data.sliderText1}</h2>
                                <ul>
                                    <li>
                                        <i className="fas fa-bed"></i>
                                        <span>{data.sliderSubText1}</span>
                                    </li>
                                    <li>
                                        <i className="fal fa-pencil-ruler"></i>
                                        <span>{data.sliderSubText2}</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-bath"></i>
                                        <span>{data.sliderSubText3}</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-car"></i>
                                        <span>{data.sliderSubText4}</span>
                                    </li>
                                </ul>
                                <div className="slider-btn mt-55">
                                    <Button variant="primary">{data.sliderButton1}</Button>
                                    <a href="#contact"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="slider-price">
                                <h3>{data.sliderSubText5}</h3>
                                <h2>{data.sliderPrice}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel.Item>
    );

    return (
        <section id="home" className="slider-area fix p-relative">
            <Carousel fade>
                {renderCarouselItem(data.sliderImage1)}
                {renderCarouselItem(data.sliderImage2)}
                {renderCarouselItem(data.sliderImage3)}
            </Carousel>
        </section>
    );
};

export default Slider;
