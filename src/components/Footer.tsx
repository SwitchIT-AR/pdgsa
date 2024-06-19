import React from 'react';

interface FooterProps {
    data: {
        footerText: string;
        footerLinks: string;
        footerItems: string;
        logoWhite: string;
        gmapsLink: string;
        footerRights: string;
    };
    driveUrl: string;
}

const Footer: React.FC<FooterProps> = ({data, driveUrl}) => {
    const footerLinks = data.footerLinks.split(',');
    const footerItems = data.footerItems.split(',');

    return (
        <footer className="footer-bg footer-p pt-100 pb-80">
            <div className="footer-top pb-30">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-sm-12">
                            <div className="footer-widget mb-30">
                                <div className="footer-text mb-20">
                                    <img style={{width: 280, height: 100, objectFit: "cover"}}
                                         src={`${driveUrl}${data.logoWhite}`} alt="logo"/>
                                    <p>{data.footerText}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h5>LA WEB</h5>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        {footerItems.map((item, index) => (
                                            <li key={index}><a href={footerLinks[index].trim()}>{item.trim()}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <iframe
                                    src={data.gmapsLink}
                                    style={{border: 0,
                                        width:"400px",
                                        height:"400px"}}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    title="Google Maps"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-text text-center">
                                <p>{data.footerRights}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
