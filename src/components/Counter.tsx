import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {CommonProps} from "../types/globalTypes.ts";
import classes from './General.module.css';

interface CounterData {
    icon: IconProp;
    count: number;
    label: string;
}


const Counter: React.FC<CommonProps> = ({ data }) => {
    const counterData: CounterData[] = [
        { icon: ['fas', 'pencil-ruler'], count: parseFloat(data.counterCount1), label: data.counterLabel1 },
        { icon: ['fas', 'bath'], count: parseInt(data.counterCount2, 10), label: data.counterLabel2 },
        { icon: ['fas', 'bed'], count: parseInt(data.counterCount3, 10), label: data.counterLabel3 },
        { icon: ['fas', 'car'], count: parseInt(data.counterCount4, 10), label: data.counterLabel4 },
    ];

    return (
        <div className="counter-area pt-90 pb-90"
            style={{ backgroundImage: 'url(img/bg/count-bg.jpg)', backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    {counterData.map((item, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}} className="col-lg-3 col-sm-6 mb-30 text-center">
                            <div className={`${classes.singleCounter} wow fadeInUp animated`}
                                data-animation="fadeInDown animated" data-delay=".2s">
                                    <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--main-color)', borderRadius: '50%'}}>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </div>

                                <div className="counter p-relative">
                                    <span className="count">{item.count}</span>
                                </div>
                                <p style={{ fontSize: '20px', margin: '0' }}>{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center'}}>
                    <p style={{ fontSize: '12px', margin: '0' }}><span style={{color: 'red'}}>*</span>Datos referencia del Modelo {data.modelHome2Subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
