import React from 'react';
import {CommonProps} from "../types/globalTypes.ts";
import classes from './General.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';



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
                                    <div style={{ maxWidth: '350px', height: 'auto', marginBottom: '40px'}}>
                                    <img style={{width: '100%', height: 'auto'}}
                                        src={`${driveUrl}${data.logoWhite}`} alt="logo"/>
                                    </div>
                                    <p>{data.footerText}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30 d-flex flex-column justify-content-center pl-100">
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
                        <div className="col-xl-5 col-lg-5 col-sm-6">
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '5px', marginBottom: '30px' }} target="_blank" rel="noopener" href="https://www.google.com/maps/place/Jardines+del+Frances/@8.606561,-82.426911,12z/data=!4m6!3m5!1s0x8fa5919ff3e3698f:0xa64f1082b2edc033!8m2!3d8.6065606!4d-82.426911!16s%2Fg%2F11v9hky864?hl=es-419&entry=ttu" >
                                    {/* <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline',  }}> */}
                                        <FontAwesomeIcon style={{ color: 'var(--main-color)', fontSize: '50px' }} icon={"fa-solid fa-location-dot" as IconProp} />
                                        <p style={{ margin: 0, padding: 0, fontSize: '30px', fontWeight: '600', letterSpacing: '4px', color: 'white', textDecoration: 'underline' }}>Ven a conocernos!</p>
                                    {/* </div> */}
                                </a>
                                <iframe
                                    src={data.gmapsLink}
                                    className={classes.gmap}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    title="Google Maps"
                                ></iframe>
                                <a style={{ textAlign: 'center' }} target="_blank" rel="noopener" href={`${driveUrl}${data.contactTerms}`}>Términos de las Políticas de Privacidad y Proteccíon de Datos Personales</a>
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
