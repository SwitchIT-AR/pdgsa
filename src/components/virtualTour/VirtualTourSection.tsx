import React from 'react';
import style from './VirtualTourSection.module.css';
import commonStyle from '../General.module.css';
import { CommonProps } from '../../types/globalTypes.ts';

const VirtualSectionImagesGroup = ({
  recorridoCasa1Link,
  imageCasa1,
  driveUrl,
}: {
  recorridoCasa1Link: string,
  imageCasa1: string,
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
        <div className=''>
            <VirtualSectionImagesGroup
              recorridoCasa1Link={data.recorridoCasa1Link}
              imageCasa1={data.recorridoCasa1Image}
              driveUrl={driveUrl}
            />
        </div>
      {/* </div> */}
    </section>
  );
};

export default VirtualTourSection;