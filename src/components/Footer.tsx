import React from 'react';
import {CommonProps} from "../types/globalTypes.ts";
import classes from './General.module.css';



const Footer: React.FC<CommonProps> = ({ data, driveUrl }) => {
    const footerLinks = data.footerLinks.split(',');
    const footerItems = data.footerItems.split(',');

    return (
        <footer className="footer-bg footer-p pt-40 pb-80">
            <div className="footer-top pb-30">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-sm-12">
                            <div className="footer-widget">
                                <div className="footer-text mb-20">
                                    <div style={{ width: '350px', height: 'auto', marginBottom: '40px'}}>
                                    <img style={{width: '100%', height: 'auto'}}
                                        src={`${driveUrl}${data.logoWhite}`} alt="logo"/>
                                    </div>
                                    <p>{data.footerText}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30 d-flex flex-column justify-content-center">
                                <div className="f-widget-title">
                                    <h5>LA WEB</h5>
                                </div>
                                <div className="footer-link">
                                    <ul style={{ margin: '0', padding: '0'}}>
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
                                    className={classes.gmap}
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
