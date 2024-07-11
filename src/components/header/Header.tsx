import React from 'react';
import { CommonProps } from '../../types/globalTypes.ts';
import classes from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Header: React.FC<CommonProps> = ({ data, driveUrl }) => {
    const itemsArray = data.navbarItems ? data.navbarItems.split(', ') : [];
    const linksArray = data.navbarLinks ? data.navbarLinks.split(', ') : [];
    const phoneNumber = data.whatsappNumber || '573002222222';
    const [openNav, setOpenNav] = React.useState(false);
    const navRef = React.useRef<HTMLDivElement>(null);

    const handleOpenNav = () => {
        setOpenNav(!openNav);
    };

    const handleClickLink = () => {
        setOpenNav(false);
    };

    const areArraysValid = itemsArray.length === linksArray.length;

    return (
        <header className="header-area">
            <div className={`${classes.secondHeader}`}>
                <div>
                    <p style={{ padding: '0', margin: '0', fontSize: '1.2rem', color: "black" }}>{data.headerWelcomeText}</p>
                </div>
                <div style={{ fontSize: '0.8rem' }} className={classes.headerInfo}>
                    <ul>
                        <li>
                            <a style={{ textDecoration: 'none', color: 'black' }} href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon style={{ color: 'var(--main-color)', fontSize: '1.3rem' }} icon={`fa-brands fa-whatsapp` as IconProp} />
                                <span>{data.headerPhone}</span>
                            </a>
                        </li>
                        <li>
                            <a style={{ textDecoration: 'none', color: 'black' }} href={`mailto:${data.headerEmail}`} target="_blank" rel="noopener noreferrer">
                                <i style={{ color: 'var(--main-color)', fontSize: '1rem' }} className="fa fa-mail-bulk"></i>
                                <span>{data.headerEmail}</span>
                            </a>
                        </li>
                        <li>
                            <i style={{ color: 'var(--main-color)', fontSize: '1rem' }} className="fa fa-clock"></i>
                            <span>{data.headerHours}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="header-sticky" className={classes.headerContainer} style={{ backgroundColor: data.headerBackground }}>
                <div style={{ backgroundColor: data.headerBackground }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} className="pt-4 pb-4">
                        <div className={classes.logo}>
                            <a href="#"><img src={`${driveUrl}${data.logo}`} alt="logo" /></a>
                        </div>
                        <nav ref={navRef} className={`${classes.nav} text-center`} id="">
                            <ul>
                                {areArraysValid ? (
                                    itemsArray.map((item, index) => (
                                        <li key={index}>
                                            <a style={{ textDecoration: "none" }} href={linksArray[index]}>{item}</a>
                                        </li>
                                    ))
                                ) : (
                                    <li>
                                        <a style={{ textDecoration: "none" }} href="#">Invalid Menu Data</a>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={`${classes.responsiveNav} shadow`}>
                <div style={{ backgroundColor: data.headerBackground, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }} className="pt-4 pb-4">
                    <div className={classes.logo}>
                        <a href="#"><img src={`${driveUrl}${data.logo}`} alt="logo" /></a>
                    </div>
                    <div className={classes.responsivBtn}>
                        <FontAwesomeIcon onClick={handleOpenNav} className={classes.bars} icon={"fa-solid fa-bars" as IconProp} />
                    </div>
                </div>
                <nav ref={navRef} className={`${classes.nav} ${openNav ? classes.open : classes.close}`} id="">
                    <ul>
                        {areArraysValid ? (
                            itemsArray.map((item, index) => (
                                <li key={index} onClick={handleClickLink}>
                                    <a style={{ textDecoration: "none" }} href={linksArray[index]}>{item}</a>
                                </li>
                            ))
                        ) : (
                            <li>
                                <a style={{ textDecoration: "none" }} href="#">Invalid Menu Data</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
