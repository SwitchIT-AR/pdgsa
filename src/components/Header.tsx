import React from 'react';

interface HeaderProps {
    data: {
        headerWelcomeText: string;
        headerPhone: string;
        headerEmail: string;
        headerHours: string;
    };
}

const Header: React.FC<HeaderProps> = ({ data }) => {
    return (
        <header className="header-area">
            <div className="header-top second-header d-none d-md-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="wellcome-text text-center text-lg-left">
                                <p>{data.headerWelcomeText}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="header-cta text-right">
                                <ul>
                                    <li>
                                        <i className="icon dripicons-phone"></i>
                                        <span>{data.headerPhone}</span>
                                    </li>
                                    <li>
                                        <i className="icon dripicons-mail"></i>
                                        <span>{data.headerEmail}</span>
                                    </li>
                                    <li>
                                        <i className="icon dripicons-clock"></i>
                                        <span>{data.headerHours}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="header-sticky" className="menu-area">
                <div className="container">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <a href="index.html"><img src="img/logo.png" alt="logo"/></a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-9">
                                <div className="responsive"><i className="icon dripicons-align-right"></i></div>
                                <div className="main-menu text-right <text-xl-right></text-xl-right>">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="has-sub">
                                                <a href="index.html">Home</a>
                                                <ul>
                                                    <li><a href="index.html">Home Page 01</a></li>
                                                    <li><a href="index-2.html">Home Page 02</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="apartments.html">Apartments </a></li>
                                            <li className="has-sub"><a href="#">Other Page</a>
                                                <ul>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="gallery.html">Gallery</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="contact.html" className="top-btn">SINGUP</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
