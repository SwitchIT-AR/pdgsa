import React from 'react';
import { CommonProps } from '../types/globalTypes';
import classes from './General.module.css';

const YouTube: React.FC<CommonProps> = ({ data }) => {
    return (
        <div
            className={classes.autoHeight}
            style={{
                backgroundColor: 'white',
        }}>
            <div style={{
                position: 'relative',
                width: '90%',
                height: 'auto',
                paddingBottom: '20%', // Maintain 16:9 aspect ratio
                paddingTop: '20%', // Maintain 16:9 aspect ratio
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Optional: Add some shadow for better UI
            }}>
                <iframe
                    src={data.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                ></iframe>
            </div>
        </div>
    );
};

export default YouTube;
