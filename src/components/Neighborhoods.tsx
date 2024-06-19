import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './General.module.css';

interface NeighborhoodsProps {
  data: {
    neighborhoodsTitle: string;
    neighborhoods: string;
  };
}

interface NeigCardProps {
  img: string;
  index: number;
  title: string;
  description: string;
}

const NeighborCard = (props: NeigCardProps) => {
  const { img, index, title, description } = props;

  console.log('img', img, 'title', title);
  return (
    <div
      className={`col-lg-4 col-md-6`}
    >
      <div
        id={`neigCard-${index}`}
        className={`${style.test} s-single-services wow fadeInUp animated`}
        data-animation='fadeInDown animated'
        data-delay='.2s'
        style={{ overflow: 'hidden' }}
      >
        <div className='second-services-content'>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={['far', 'star-half']}
            pull='right'
            color='#d29751'
            transform='right-28 grow-50'
          />
        </div>
      </div>
    </div>
  );
};

const Neighborhoods: React.FC<NeighborhoodsProps> = ({ data }) => {
  const neighborhoods = data.neighborhoods.split('|');

  return (
    <section
      id='services'
      className='services-area services-bg services-two pt-120 pb-90'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-8 col-lg-10'>
            <div
              className='section-title text-center pl-40 pr-40 mb-80  fadeInDown animated'
              data-animation='fadeInDown animated'
              data-delay='.2s'
            >
              <span>Altos Vecinos</span>
              <h2>{data.neighborhoodsTitle}</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          {neighborhoods.map((neighborhood, index) => (
            <NeighborCard
              key={index}
              img={neighborhood}
              index={index}
              title='Hospital'
              description='Christ, General Hospital 0.18km'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Neighborhoods;
