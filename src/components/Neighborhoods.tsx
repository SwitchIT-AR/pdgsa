import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './General.module.css';

interface NeighborhoodsProps {
  data: {
    amenitiesTitle: string;
    amenitiesData: string;
    mainColor: string;
  };
}

interface NeigCardProps {
  index: number;
  title: string;
  description: string;
}

const NeighborCard = (props: NeigCardProps) => {
  const { index, title, description } = props;

  return (
    <div className={`col-lg-4 col-md-6`}>
      <div
        id={`neigCard-${index}`}
        className={`${style.test} s-single-services wow fadeInUp animated`}
        data-animation='fadeInDown animated'
        data-delay='.2s'
        style={{ overflow: 'hidden' }}
      >
        <div style={{height: '50px'}} className='second-services-content'>
          <h5 style={{fontSize: '17px'}}>{title}</h5>
          <p style={{fontSize: '15px'}}>{description}</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={['far', 'star-half']}
            pull='right'
            color='var(--main-color)'
            transform='right-28 grow-50'
          />
        </div>
      </div>
    </div>
  );
};

const Neighborhoods: React.FC<NeighborhoodsProps> = ({ data }) => {
    const amenities = data.amenitiesData.split(', ');
    const formated = amenities.map((data) => data.split(' - '));

    return (
        <section id='Amenidades' className={`${style.servicesTwo} services-two`}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-8 col-lg-10'>
                        <div
                        className={`${style.sectionTitle} text-center pl-40 pr-40 mb-80 fadeInDown animated`}
                        data-animation='fadeInDown animated'
                        data-delay='.2s'
                        >
                            <span style={{color: `var(--main-color)`}}>{data.amenitiesTitle}</span>
                        </div>
                    </div>
                </div>
                <div className='row'>
                {formated.map((neighborhood, index) => (
                    <NeighborCard
                    key={index}
                    index={index}
                    title={neighborhood[0]}
                    description={neighborhood[1]}
                    />
                ))}
                </div>
            </div>
        </section>
    );
};

export default Neighborhoods;
