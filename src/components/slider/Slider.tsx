import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CommonProps } from '../../types/globalTypes.ts';
import classes from './slider.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Slider: React.FC<CommonProps> = ({ data, driveUrl }) => {
    const renderCarouselItem = (image: string) => (
        <Carousel.Item>
            <div
                className='single-slider slider-bg d-flex align-items-center'
                style={{ backgroundImage: `url(${driveUrl}${image})` }}
            >
                <div className='container'>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='col-lg-6 mb-20'>
                            <div className={`${classes.sliderContent}`}>
                                <h2>{data.sliderText1}</h2>
                                <div className={`${classes.btnGroup}`}>
                                    <a href='#contact'>{data.sliderButton1}</a>
                                    <div className={`${classes.sliderPrice}`}>
                                        <h3>{data.sliderSubText5}</h3>
                                        <h2>{data.sliderPrice}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <ul className={classes.iconsGroup}>
                            <li>
                            <FontAwesomeIcon
                                className={classes.icon}
                                icon={`fa-solid fa-pen-ruler ` as IconProp}
                            />
                            <span>{data.sliderSubText1}</span>
                            </li>
                            <li>
                            <FontAwesomeIcon
                                className={classes.icon}
                                icon={`fa-solid fa-bed ` as IconProp}
                            />
                            <span>{data.sliderSubText2}</span>
                            </li>
                            <li>
                            <FontAwesomeIcon
                                className={classes.icon}
                                icon={`fa-solid fa-bath ` as IconProp}
                            />
                            <span>{data.sliderSubText3}</span>
                            </li>
                            <li>
                            <FontAwesomeIcon
                                className={classes.icon}
                                icon={`fa-solid fa-car ` as IconProp}
                            />
                            <span>{data.sliderSubText4}</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel.Item>
    );

  return (
    <section
      id='home'
      className={`${classes.sectionMargins}slider-area fix p-relative`}
    >
      <Carousel fade>
        {renderCarouselItem(data.sliderImage1)}
        {renderCarouselItem(data.sliderImage2)}
        {renderCarouselItem(data.sliderImage3)}
      </Carousel>
    </section>
  );
};

export default Slider;
