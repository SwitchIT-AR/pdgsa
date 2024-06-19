import React from 'react';
import {CommonProps} from "../types/globalTypes.ts";


const SocialMedia: React.FC<CommonProps> = ({ data }) => {
    const iconsArray = data.socialMediaIcons.split('|');
    const linksArray = data.socialMediaLinks.split('|');

    return (
        <div className="social-media-container" style={{ backgroundColor: '#FF6F00', padding: '20px 0' }}>
            <div className="container">
                <div className="row justify-content-center">
                    {iconsArray.map((icon, index) => (
                        <div key={index} className="col-auto">
                            <a href={linksArray[index].trim()} target="_blank" rel="noopener noreferrer">
                                <i className={`fab ${icon}`} style={{ fontSize: '2rem', color: '#fff', margin: '0 10px' }}></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;
