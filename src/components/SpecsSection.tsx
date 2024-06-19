import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './General.module.css';

interface SpecsSectionProps {
  data: {
    specsTitle: string;
    specsData: string;
    mainColor: string;
  };
}

const SpecCard = (props: { index: number; title: string; icon: string, color: string }) => {
  return (
    <div className='col-lg-4 col-md-6 mb-30' key={props.index}>
      <div
        className='s-single-services wow fadeInUp  animated'
        data-animation='fadeInDown animated'
        data-delay='.2s'
        style={{ height: '200px'}}
      >
        <div style={{ marginBottom: '15px', marginLeft: '15px' }}>
          <FontAwesomeIcon
            style={{
              backgroundColor: `${props.color}`,
              borderRadius: '50%',
              padding: '15px',
              color: 'white',
              fontSize: '30px',
            }}
            icon={props.icon}
          />
        </div>
        <div className='second-services-content2'>
          <h5 style={{ fontSize: '14px' }}>{props.title}</h5>
        </div>
      </div>
    </div>
  );
};

const SpecsSection = (props: SpecsSectionProps) => {
  const { data } = props;
  const specsList = data.specsData.split(', ');
  const formatedList = specsList.map((data) => data.split(' - '));
  const color = data.mainColor;

  console.log(formatedList);
  return (
    <section id='services' className='services-area'>
      <div className='container'>
        {}
        <div className='row justify-content-center'>
          <div className='col-xl-8 col-lg-10'>
            <div
              className={`${style.sectionTitle} text-center pl-40 pr-40 mb-80  fadeInDown animated`}
            >
              <span style={{ color: `${data.mainColor}` }}>
                {data.specsTitle}
              </span>
            </div>
            <div className='row'>
              {
                formatedList.map((data, index) => (
                  <SpecCard index={index} title={data[1]} icon={data[0]} color={color} />
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
