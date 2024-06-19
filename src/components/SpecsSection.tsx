import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './General.module.css';

interface SpecsSectionProps {
  data: {
    specsTitle: string;
    specsData: string;
    mainColor: string;
  };
}

const SpecCard = (props: {index: number, title: string, icon: string}) => {

}

const SpecsSection = (props: SpecsSectionProps) => {
  const { data } = props;
  const specsList = data.specsData.split(', ');
  const formatedList = specsList.map((data) => data.split(' - '));

  console.log(formatedList)
  return (
  <section id='services' className='services-area'>
        <div className='container'>
          {}
          <div className='row justify-content-center'>
            <div className='col-xl-8 col-lg-10'>
              <div className={`${style.sectionTitle} text-center pl-40 pr-40 mb-80  fadeInDown animated`}>
                <span style={{color: `${data.mainColor}`}}>{data.specsTitle}</span>
              </div>
              <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                    <div className="s-single-services wow fadeInUp  animated" data-animation="fadeInDown animated" data-delay=".2s">
                        <div style={{ }} className="services-ico2">
                        <FontAwesomeIcon style={{ backgroundColor: `${data.mainColor}`, borderRadius: '50%', padding: '10px', color: 'white', fontSize: '30px' }} icon="fa-solid fa-road" />
                        </div>
                        <div className="second-services-content2">
                            <h5>Dedicated Production & Planning Teams </h5>
                        </div>
                    </div>
                </div>
            </div>
              <div>
              
              <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-ground-water" />
              <FontAwesomeIcon icon="fa-solid fa-network-wired" />
              <FontAwesomeIcon icon="fa-solid fa-solar-panel" />
              <FontAwesomeIcon icon="fa-solid fa-tent" />
              <FontAwesomeIcon icon="fa-solid fa-children" />
              <FontAwesomeIcon icon="fa-solid fa-hand-holding-droplet" />
              <FontAwesomeIcon icon="fa-solid fa-paw" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SpecsSection;
