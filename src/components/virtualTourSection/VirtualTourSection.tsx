import React from 'react';
import style from './VirtualTourSection.module.css';
import commonStyle from '../General.module.css';
import { CommonProps } from '../../types/globalTypes.ts';

const VirtualSectionImagesGroup = ({
  recorridoCasa1Link,
  // recorridoCasa2Link,
  imageCasa1,
  // imageCasa2,
  driveUrl,
}: {
  recorridoCasa1Link: string,
  // recorridoCasa2Link: string,
  imageCasa1: string,
  // imageCasa2: string,
  driveUrl: string;
}) => {
  return (
    <div className={style.imgGroup}>
      <div
        className={style.imgContainer}
      >
        <a href={recorridoCasa1Link} target="_blank" rel="noopener">
        <img
          src={`${driveUrl}${imageCasa1}`}
          className={style.imgResponsive}
          alt='Recorrido casa 1'
        />
        </a>
      </div>
      {/* <div
        className={style.imgContainer}
      >
        <a href={recorridoCasa2Link} target="_blank" rel="noopener">
        <img
          src={`${driveUrl}${imageCasa2}`}
          className={style.imgResponsive}
          alt='model home1'
        />
        </a>
      </div> */}
    </div>
  );
};

const VirtualTourSection: React.FC<CommonProps> = ({ data, driveUrl }) => {

  return (
    <section
      id='VirtualTour'
      className={`${style.sectionContainer}`}
    >
      <div className={`${commonStyle.sectionTitle} text-center pl-40 pr-40 mb-80 fadeInDown animated`}>
                <span style={{color: `var(--main-color)`}}>{data.recorridoTitleSection}</span>
              </div>
      {/* <div
        className={`${style.sectionTitle} text-center pl-40 pr-40  fadeInDown animated`}
      >
        <span
          className={style.homeModelTitle}
          style={{ color: `var(--main-color)` }}
        >
          {data.recorridoTitleSection}
        </span>
      </div> */}
      {/* <div className='row justify-content-center'> */}
        <div>
            <VirtualSectionImagesGroup
              recorridoCasa1Link={data.recorridoCasa1Link}
              recorridoCasa2Link={data.recorridoCasa2Link}
              imageCasa1={data.recorridoCasa1Image}
              imageCasa2={data.recorridoCasa2Image}
              driveUrl={driveUrl}
            />
        </div>
      {/* </div> */}
    </section>
  );
};

export default VirtualTourSection;
