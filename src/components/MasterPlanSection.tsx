import style from './General.module.css';
import React from "react";
import {CommonProps} from "../types/globalTypes.ts";
import ModalImage from './modalImage/ModalImage.tsx';

const MasterPlanSection: React.FC<CommonProps> = ({ data, driveUrl }) => {
  return (

  <section id='Plano' className='services-area mb-50'>
        <div className='container'>
          <div className='row justify-content-center'>
              <div className={`${style.sectionTitle} text-center pl-40 pr-40 mb-80 fadeInDown animated`}>
                <span style={{color: `var(--main-color)`}}>{data.masterplanTitle}</span>
              </div>
              <ModalImage src={`${driveUrl}${data.masterplanImage}`} alt='map' id='masterPlan' />
              <div data-toggle="modal" data-target={`#masterPlan`}>
                <img src={`${driveUrl}${data.masterplanImage}`} style={{height: 'auto', width: '100%'}} alt='map'/>
              </div>
            </div>
        </div>
      </section>
  )
}

export default MasterPlanSection;
