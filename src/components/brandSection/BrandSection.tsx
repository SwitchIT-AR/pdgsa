import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CommonProps } from '../../types/globalTypes.ts';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classes from './Brand.module.css';

const BrandSection: React.FC<CommonProps> = ({ data, driveUrl }) => {
  const phoneNumber = data.whatsappNumber || '573002222222';

  return (
    <section
      style={{
        marginBottom: '40px',
        backgroundImage: `url(${driveUrl}${data.brandHeroImage})`,
        position: 'relative',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: '1',
      }}
      className={`${classes.brandContainer} cta-area cta-bg pt-120 pb-120`}
    >
      <div
        style={{position: 'absolute', backgroundColor: 'rgba(0,0,0,0.5)', top: '0' , zIndex: '2', height: '100%', width: '100%' }}
      ></div>
      <div style={{ position: 'relative', zIndex: '2' }} className='container'>
        <div className='row justify-content-center text-center'>
          <div className='col-lg-12'>
            <div
              className='section-title cta-title wow fadeInLeft animated'
              data-animation='fadeInDown animated'
              data-delay='.2s'
            >
              <h2>{data.brandTitle}</h2>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <FontAwesomeIcon
                  style={{ color: 'white', fontSize: '50px' }}
                  icon={`fa-brands fa-whatsapp` as IconProp}
                />
                <h3>{data.brandPhone}</h3>
              </div>
              <div
                className='cta-btn s-cta-btn wow fadeInRight animated'
                data-animation='fadeInDown animated'
                data-delay='.2s'
              >
                <a
                  style={{
                    backgroundColor: `${data.mainColor}`,
                    fontSize: '25px',
                    borderRadius: '20px',
                    padding: '4px 20px',
                  }}
                  href={`https://wa.me/${phoneNumber}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn'
                >
                  {data.botonbrandtitle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
