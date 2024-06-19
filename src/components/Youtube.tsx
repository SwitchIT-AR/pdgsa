import React from 'react';
import { CommonProps } from '../types/globalTypes';

const YouTube: React.FC<CommonProps> = ({ data }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            padding: '0 10%',
            backgroundColor: '#f0f0f0' // Optional: Set background color
        }}>
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '800px', // Set a max width for responsiveness
                paddingBottom: '56.25%', // Maintain 16:9 aspect ratio
                overflow: 'hidden',
                borderRadius: '10px', // Optional: Add border-radius for rounded corners
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
