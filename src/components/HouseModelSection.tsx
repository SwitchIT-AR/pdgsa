import style from './General.module.css';
import React from "react";
import {CommonProps} from "../types/globalTypes.ts";


const HouseModelSection: React.FC<CommonProps> = ({ data, driveUrl }) => {
  return (
    <section id='services' className='services-area pt-10 pb-50'>
      {/* <div className='container'> */}
        <div className='row justify-content-center'>
          <div className='col-xl-8 col-lg-10'>
            <div
              className={`${style.sectionTitle} text-center pl-40 pr-40 mb-80  fadeInDown animated`}
            >
              <span className={style.homeModelTitle} style={{ color: `var(--main-color)` }}>
                {data.modelHomeTitle}
              </span>
              <h2 className={style.homeModelSubitle}>{data.modelHomeSubtitle}</h2>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '100%', height: 'auto' }}>
                <img
                  src={`${driveUrl}${data.modelHomeImage2}`}
                  style={{ width: 'auto', height: '400px' }}
                  alt='model home2'
                />
              </div>
              <div style={{  }}>
                <img
                  src={`${driveUrl}${data.modelHomeImage1}`}
                  style={{ width: 'auto', height: '400px' }}
                  alt='model home1'
                />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default HouseModelSection;
