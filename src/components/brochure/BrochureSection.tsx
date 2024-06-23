import React from "react";
import {CommonProps} from "../../types/globalTypes.ts";
import classes from './brochure.module.css';



const BrochureSection: React.FC<CommonProps> = ({ data, driveUrl }) => {
  return (
    <section id='brochure' className='pt-50 pb-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 pt-90'>
            <div className='about-content pl-lg-50'>
              <div className={`${classes.centerTitle}`}>
                <h2>{data.brochureTitle}</h2>
              </div>

              <div className={classes.centerDivContent}>
              <a
                href='#'
                style={{
                  backgroundColor: `var(--main-color)`,
                  color: 'white',
                  borderRadius: '50px',
                  fontSize: '25px',
                  padding: '5px 40px',
                }}
                className='btn'
              >
                Descargar
              </a>
              </div>
            </div>

          </div>
          <div className='col-lg-5'>
            <div style={{ objectFit: 'cover' }}>
              <img
                src={`${driveUrl}${data.brochureImage}`}
                style={{ width: '100%', height: 'auto' }}
                alt='img'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
