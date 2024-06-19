import style from './General.module.css';

interface MapSectionProps {
  data: {
    mapTitle: string;
    mapImage: string;
    mainColor: string;
  };
}

const MapSection = (props: MapSectionProps) => {
  const { data } = props;
  return (

  <section id='services' className='services-area'>
        <div className='container'>
          {}
          <div className='row justify-content-center'>
            <div className='col-xl-8 col-lg-10'>
              <div className={`${style.sectionTitle} text-center pl-40 pr-40 mb-80  fadeInDown animated`}>
                <span style={{color: `${data.mainColor}`}}>{data.mapTitle}</span>
              </div>
              <div>
                <img src='https://placehold.co/400' style={{ height: '100vh', width: '100%'}} alt='map' />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MapSection;
