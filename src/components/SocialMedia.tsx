import React from 'react';
import {CommonProps} from "../types/globalTypes.ts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const SocialMedia: React.FC<CommonProps> = ({ data }) => {
    const iconsArray = data.socialMediaIcons.split('|');
    const linksArray = data.socialMediaLinks.split('|');

    return (
        <div className="social-media-container" style={{ backgroundColor: 'var(--main-color', padding: '20px 0' }}>
            <div className="container">
                <div className="row justify-content-center">
                    {iconsArray.map((icon, index) => (
                        <div key={index} className="col-auto">
                            <a href={linksArray[index].trim()} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={`fa-brands ${icon}` as IconProp} style={{ fontSize: '2rem', color: '#fff', margin: '0 10px' }} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;
