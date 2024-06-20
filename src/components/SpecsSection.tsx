// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './General.module.css';
// import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CommonProps } from '../types/globalTypes';

const SpecCard = (props: { index: number; title: string; icon: string, color: string, driveUrl: string }) => {
  return (
    <div className='col-lg-4 col-md-6 mb-30' key={props.index}>
      <div
        className={`${style.centerDivContent} s-single-services wow fadeInUp  animated`}
        data-animation='fadeInDown animated'
        data-delay='.2s'
        style={{ height: '200px'}}
      >
        <div style={{ backgroundColor: 'var(--main-color)', borderRadius: '50%', width: '50px', height: '50px', padding:'7px' }}>
          <img style={{ width: '100%', height: 'auto' }} src={`${props.driveUrl}${props.icon}`} alt="" />
        </div>
        <div className='second-services-content2'>
          <h5 style={{ fontSize: '14px' }}>{props.title}</h5>
        </div>
      </div>
    </div>
  );
};

const SpecsSection: React.FC<CommonProps> = ({ data, driveUrl }) => {

  const specsList = data.specsData.split(', ');
  const formatedList = specsList.map((data) => data.split(' - '));
  const color = data.mainColor;
  return (
    <section id='services' className='services-area'>
      <div className='container'>
        {}
        <div className='row justify-content-center'>
          <div className='col-xl-8 col-lg-10'>
            <div
              className={`${style.sectionTitle} text-center pl-40 pr-40 mb-80  fadeInDown animated`}
            >
              <span style={{ color: `var(--main-color)` }}>
                {data.specsTitle}
              </span>
            </div>
            <div className='row'>
              {
                formatedList.map((data, index) => (
                  <SpecCard index={index} title={data[1]} icon={data[0]} color={color} driveUrl={driveUrl} />
                ))
              }
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
