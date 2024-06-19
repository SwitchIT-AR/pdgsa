import style from './General.module.css';

interface HouseModelSectionProps {
  data: {
    modelHomeTitle: string;
    modelHomeSubtitle: string;
    modelHomeImage1: string;
    modelHomeImage2: string;
    mainColor: string;
  };
  driveUrl: string;
}

const HouseModelSection: React.FC<HouseModelSectionProps> = ({
  data,
  driveUrl,
}) => {
  console.log(`${driveUrl}${data.modelHomeImage1}`);
  return (
    <section id='services' className='services-area pt-113 pb-150'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-8 col-lg-10'>
            <div
              className={`${style.sectionTitle} text-center pl-40 pr-40 mb-80  fadeInDown animated`}
            >
              <span style={{ fontSize: '40px', color: `${data.mainColor}` }}>
                {data.modelHomeTitle}
              </span>
              <h2 style={{ fontSize: '35px' }}>{data.modelHomeSubtitle}</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ objectFit: 'cover' }}>
                <img
                  src={`${driveUrl}${data.modelHomeImage2}`}
                  style={{ width: '100%', height: 'auto' }}
                  alt='model home2'
                />
              </div>
              <div style={{ objectFit: 'cover' }}>
                <img
                  src={`${driveUrl}${data.modelHomeImage1}`}
                  style={{ width: '100%', height: 'auto' }}
                  alt='model home1'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseModelSection;
