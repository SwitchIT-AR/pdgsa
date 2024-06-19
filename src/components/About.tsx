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
        aboutText: string;
    };
    driveUrl: string;
}

const About: React.FC<AboutProps> = ({ data, driveUrl }) => {
    return (
        <section id="about" className="about-area about-p pt-120 pb-120 p-relative">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="s-about-img p-relative">
                            <img src={`${driveUrl}${data.aboutImage}`} alt="img" />
                            <div className="about-text second-about">
                                <span>{data.aboutDescription2}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content s-about-content pl-30">
                            <div className="about-title second-title">
                                <span>{data.aboutTitle} </span>
                                <h2>{data.aboutSubtitle} </h2>
                                <p>{data.aboutDescription}</p>
                            </div>
                            <p>{data.aboutText}</p>
                            <a href={data.aboutButtonLink} className="btn" style={{borderRadius: 50, backgroundColor:"#D29651", color:"white", fontSize:"1rem", padding:"1rem"}}>{data.aboutButton}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
