import React from 'react';
import { CommonProps } from '../../types/globalTypes';
import classes from './about.module.css';


const About: React.FC<CommonProps> = ({ data, driveUrl }) => {
    return (
        <section id="Proyectos" className="about-area about-p pb-50 ">
            <div className="container">
                <div className="row">
                    <div className={`${classes.imgSection} col-lg-6 mb-sm-5`}>
                                <div className={`${classes.sAboutImg}`}>
                                    <img src={`${driveUrl}${data.aboutImage}`} alt="img" />
                                    <div className={`${classes.aboutText}`}>
                                        <span>{data.aboutDescription2}</span>
                                    </div>
                                </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${classes.aboutContent}`}>
                            <div className={`${classes.aboutTitle}`}>
                                <span>{data.aboutTitle} </span>
                                <h2>{data.aboutSubtitle} </h2>
                                <p>{data.aboutDescription}</p>
                            </div>
                            <p className={classes.aboutDescText}>{data.aboutText}</p>
                            <div className={classes.centerDivContent}>
                            <a href={data.aboutButtonLink} className="btn" style={{borderRadius: 50, backgroundColor:"var(--main-color)", color:"white", fontSize:"1rem", padding:"5px 25px"}}>{data.aboutButton}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
