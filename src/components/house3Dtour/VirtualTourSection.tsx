import React from 'react';
import style from './VirtualTourSection.module.css';
import commonStyle from '../General.module.css';
import { CommonProps } from '../../types/globalTypes.ts';

const VirtualSectionImagesGroup = ({
  casa3D1Link,
  casa3D1Imagen,
  // casa3D2Linkcasa3D2Imagen,
  // casa3D2Imagen,
  driveUrl,
}: {
  casa3D1Link: string,
  casa3D1Imagen: string,
  // casa3D2Link: string,
  // casa3D2Imagen: string,
  driveUrl: string;
}) => {
  return (
    <div className={style.imgGroup}>
      <div
        className={style.imgContainer}
      >
        <a href={casa3D1Link} target="_blank" rel="noopener">
        <img
          src={`${driveUrl}${casa3D1Imagen}`}
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

const VirtualHouseTourSection: React.FC<CommonProps> = ({ data, driveUrl }) => {

  return (
    <section
      id='VirtualTour'
      className={`${style.sectionContainer}`}
    >
      <div className={`${commonStyle.sectionTitle} text-center pl-40 pr-40 mb-80 fadeInDown animated`}>
                <span style={{color: `var(--main-color)`}}>{data.casaVirtualTitleSection}</span>
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
              casa3D1Link={data.casa3D1Link}
              casa3D1Imagen={  data.casa3D1Imagen}
              driveUrl={driveUrl}
            />
        </div>
      {/* </div> */}
    </section>
  );
};

export default VirtualHouseTourSection;
