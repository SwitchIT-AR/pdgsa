import React from 'react';
import { CommonProps } from '../../types/globalTypes.ts';
import classes from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
// import CloseButton from './CloseButton.tsx';

const Header: React.FC<CommonProps> = ({ data, driveUrl }) => {
    const itemsArray = data.navbarItems ? data.navbarItems.split(', ') : [];
    const linksArray = data.navbarLinks ? data.navbarLinks.split(', ') : [];

  // Validate arrays length
    const areArraysValid = itemsArray.length === linksArray.length;

    return (
        // <header>
        //     <div className={classes.secondHeader}></div>
        //     <div id="header-sticky" className={classes.navigationContainer} style={{backgroundColor: data.headerBackground }}>
        //         <div className={classes.logo}>
        //             <a href="#">
        //                 <img src={`${driveUrl}${data.logo}`} alt="logo"/>
        //             </a>
        //         </div>
        //         <div className={classes.responsivBtn}>
        //         <FontAwesomeIcon icon={"fa-solid fa-plus" as IconProp} />
        //         </div>
        //         <nav id='' className={classes.headerInfo}>
        //             <ul>
        //                 {areArraysValid ? (
        //                     itemsArray.map((item, index) => (
        //                         <li key={index}>
        //                             <a style={{ textDecoration: 'none', color: 'black' }} href={linksArray[index]}>
        //                                 {item}
        //                             </a>
        //                         </li>
        //                     ))
        //                 ) : (
        //                         <li>
        //                             <a style={{ textDecoration: 'none', color: 'black' }} href='#'>
        //                                 Invalid Menu Data
        //                             </a>
        //                         </li>
        //                 )}
        //             </ul>
        //         </nav>
        //     </div>
        // </header>
    <header className="header-area">
        <div className={`${classes.secondHeader}`}>
                        <div className="">
                            <p style={{padding: '0', margin: '0' ,fontSize:'1.2rem', color:"black"}}>{data.headerWelcomeText}</p>
                        </div>
                        <div style={{fontSize:'0.8rem'}} className={classes.headerInfo}>
                            <ul>
                                <li>
                                <FontAwesomeIcon style={{ color: 'var(--main-color)', fontSize: '1.3rem' }} icon={`fa-brands fa-whatsapp` as IconProp} />
                                    <span>{data.headerPhone}</span>
                                </li>
                                <li>
                                    <i style={{ color: 'var(--main-color)', fontSize: '1rem' }} className="fa fa-mail-bulk"></i>
                                    <span>{data.headerEmail}</span>
                                </li>
                                <li>
                                    <i style={{ color: 'var(--main-color)', fontSize: '1rem' }} className="fa fa-clock"></i>
                                    <span>{data.headerHours}</span>
                                </li>
                            </ul>
                        </div>
        </div>
        <div id="header-sticky" className="" style={{backgroundColor: data.headerBackground}}>
            <div className="container">
                <div className="second-menu" style={{backgroundColor: data.headerBackground}}>
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2">
                            <div className="logo">
                                <a href="#"><img style={{width:"90%", height: 'auto'}} src={`${driveUrl}${data.logo}`} alt="logo"/></a>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-9">
                            <div className="responsive">
                            <FontAwesomeIcon icon={"fa-solid fa-bars" as IconProp} />
                            </div>
                            <div className={`${classes.textLinks} main-menu text-center`}>
                                <nav id="mobile-menu">
                                    <ul>
                                        {areArraysValid ? (
                                            itemsArray.map((item, index) => (
                                                <li key={index}>
                                                    <a style={{textDecoration:"none"}} href={linksArray[index]}>{item}</a>
                                                </li>
                                            ))
                                        ) : (
                                            <li>
                                                <a style={{textDecoration:"none"}} href="#">Invalid Menu Data</a>
                                            </li>
                                        )}
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
