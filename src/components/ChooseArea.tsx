import React from 'react';

interface ChooseAreaProps {
    data: {
        chooseAreaTitle: string;
        chooseAreaItems: string;
    };
}

const ChooseArea: React.FC<ChooseAreaProps> = ({ data }) => {
    const chooseAreaItems = data.chooseAreaItems.split('|');

    return (
        <div className="choose-area">
            <h2>{data.chooseAreaTitle}</h2>
            <ul>
                {chooseAreaItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChooseArea;
