import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface CounterData {
    icon: IconProp;
    count: number;
    label: string;
}

interface CounterProps {
    data: any;
}

const Counter: React.FC<CounterProps> = ({ data }) => {
    const counterData: CounterData[] = [
        { icon: ['fas', 'pencil-ruler'], count: parseInt(data.counterCount1, 10), label: data.counterLabel1 },
        { icon: ['fas', 'bath'], count: parseInt(data.counterCount2, 10), label: data.counterLabel2 },
        { icon: ['fas', 'bed'], count: parseInt(data.counterCount3, 10), label: data.counterLabel3 },
        { icon: ['fas', 'car'], count: parseInt(data.counterCount4, 10), label: data.counterLabel4 },
    ];

    return (
        <div className="counter-area pt-120 pb-90"
             style={{ backgroundImage: 'url(img/bg/count-bg.jpg)', backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    {counterData.map((item, index) => (
                        <div key={index} className="col-lg-3 col-sm-6 text-center">
                            <div className="single-counter mb-30 wow fadeInUp animated"
                                 data-animation="fadeInDown animated" data-delay=".2s">

                                    <FontAwesomeIcon icon={item.icon} />

                                <div className="counter p-relative">
                                    <span className="count">{item.count}</span>
                                </div>
                                <p>{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Counter;
