import style from './houseModel.module.css';
import React from "react";
import {CommonProps} from "../../types/globalTypes.ts";


const HouseModelSection: React.FC<CommonProps> = ({ data, driveUrl }) => {
  return (
    <section id='Modelo de Casa' className='pt-10 pb-50'>
      {/* <div className='container'> */}
        <div className='row justify-content-center'>
          <div style={{ padding: '0 5rem' }}>
            <div
              className={`${style.sectionTitle} text-center pl-40 pr-40  fadeInDown animated`}
            >
              <span className={style.homeModelTitle} style={{ color: `var(--main-color)` }}>
                {data.modelHomeTitle}
              </span>
              <h2 className={style.homeModelSubitle}>{data.modelHomeSubtitle}</h2>
            </div>
            <div className={style.imgGroup}>
              <div className={style.imgContainer}>
                <img
                  src={`${driveUrl}${data.modelHomeImage2}`}
                  className={style.imgResponsive}
                  alt='model home2'
                />
              </div>
              <div className={style.imgContainer}>
                <img
                  src={`${driveUrl}${data.modelHomeImage1}`}
                  className={style.imgResponsive}
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
