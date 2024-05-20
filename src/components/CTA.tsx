import React from 'react';

interface CTAProps {
    data: any[];
}

const CTA: React.FC<CTAProps> = ({ data }) => {
    return (
        <section className="cta-area cta-bg pt-120 pb-120" style={{ backgroundImage: 'url(img/bg/cta_bg02.jpg)' }}>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-12">
                        <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
                            <p>{data[0]}</p>
                            <h2>{data[1]}</h2>
                            <h3>{data[2]}</h3>
                            <div className="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s">
                                <a href="#" className="btn">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
