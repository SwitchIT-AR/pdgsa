import style from './General.module.css';
import React from "react";
import {CommonProps} from "../types/globalTypes.ts";

const MapSection: React.FC<CommonProps> = ({ data, driveUrl }) => {
  return (

  <section id='Alrededores'>
        <div className='container'>
          <div className='row justify-content-center'>
              <div className={`${style.sectionTitle} text-center pl-40 pr-40 fadeInDown animated`}>
                <span className={style.titleSizeSm} style={{color: `${data.mainColor}`}}>{data.mapTitle}</span>
              </div>
              <div>
                <img src={`${driveUrl}${data.mapImage}`} style={{ height: 'auto', width: '100%'}} alt='map' />
              </div>

          </div>
        </div>
      </section>
  )
}

export default MapSection;
