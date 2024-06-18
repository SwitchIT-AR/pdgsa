import React from 'react';

interface AboutProps {
    data: {
        aboutTitle: string;
        aboutSubtitle: string;
        aboutDescription: string;
        aboutDescription2: string;
        aboutButton: string;
        aboutButtonLink: string;
        aboutImage: string;
    };
}

const About: React.FC<AboutProps> = ({ data }) => {
    return (
        <section id="about" className="about-area about-p pt-120 pb-120 p-relative">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="s-about-img p-relative">
                            <img src={data.aboutImage} alt="img" />
                            <div className="about-text second-about">
                                <span>{data.aboutDescription2}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content s-about-content pl-30">
                            <div className="about-title second-atitle">
                                <span>About Us</span>
                                <h2>{data.aboutTitle}</h2>
                                <p><span>{data.aboutSubtitle}</span></p>
                            </div>
                            <p>{data.aboutDescription}</p>
                            <a href={data.aboutButtonLink} className="btn">{data.aboutButton}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
