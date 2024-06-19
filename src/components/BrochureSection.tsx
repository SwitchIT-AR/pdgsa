import React from "react";
import {CommonProps} from "../types/globalTypes.ts";



const BrochureSection: React.FC<CommonProps> = ({ data, driveUrl }) => {
  return (
    <section id='about' className='about-area about-p pt-120 pb-120 p-relative'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='about-content'>
              <div className='about-title'>
                <h2 style={{ fontSize: '50px' }}>{data.brochureTitle}</h2>
              </div>

              <a
                href='#'
                style={{
                  backgroundColor: `${data.mainColor}`,
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '20px',
                  padding: '5px 10px',
                }}
                className='btn'
              >
                Descargar
              </a>
            </div>
          </div>
          <div className='col-lg-6'>
            <div style={{ objectFit: 'cover' }}>
              <img
                src={`${driveUrl}${data.brochureImage}`}
                style={{ width: '70%', height: 'auto' }}
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
