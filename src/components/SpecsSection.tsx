import style from './General.module.css';
import { CommonProps } from '../types/globalTypes';

const SpecCard = (props: { index: number; title: string; icon: string, color: string, driveUrl: string }) => {
  return (
    <div className='col-lg-4 col-md-6 mb-30' key={props.index}>
      <div
        className={`${style.centerDivContent} wow fadeInUp  animated`}
        data-animation='fadeInDown animated'
        data-delay='.2s'
        style={{ }}
      >
        <div className={style.imgContainer}>
          <img style={{ width: '100%', height: 'auto' }} src={`${props.driveUrl}${props.icon}`} alt="" />
        </div>
        <div className=''>
          <p style={{ fontSize: '16px', margin: '0', color: 'black' }}>{props.title}</p>
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
    <section id='Caracteristicas' className='services-area'>
      <div className='container'>
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
                  <SpecCard key={index} index={index} title={data[1]} icon={data[0]} color={color} driveUrl={driveUrl} />
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
