import React from 'react';

interface ApartmentsProps {
  data: {
    apartmentsTitle: string;
    apartments: string;
  };
}

interface ApCardProps {
  img: string;
  index: number;
}

const ApartmentCard = (props: ApCardProps) => {
  const { img, index } = props;
  console.log('imagen apartment', img);

  const formatedIndex = (index + 1).toString().padStart(2, '0');

  if (index == 0) {
    return (
      <div className='col-xl-4' key={`ap-${index}`}>
        <div className='single-services mb-30'>
          <div className='services-thumb'>
            <a
              className='gallery-link popup-image'
              href='img/gallery/gallery.jpg'
            >
              <img src='../img/gallery.jpg' alt='img' />
            </a>
          </div>
          <div className='services-content'>
            <small>Explore Now</small>
            <h4>
              <a href='apartments-details.html'>One Room Apartment</a>
            </h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='col-xl-4'>
      <div className='single-services mb-30'>
        <div className='services-thumb'>
          <a
            className='gallery-link popup-image'
            href='img/gallery/gallery.jpg'
          >
            <img
              src={`../img/gallery${formatedIndex}.jpg`}
              alt='img'
            />
          </a>
        </div>
        <div className='services-content'>
          <small>Explore Now</small>
          <h4>
            <a href='apartments-details.html'>One Room Apartment</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

const Apartments: React.FC<ApartmentsProps> = ({ data }) => {
  const apartments = data.apartments.split('|');

  return (
    <section id='services' className='services-area pt-113 pb-150'>
      <div className='container'>
        {}
        <div className='row justify-content-center'>
          <div className='col-xl-8 col-lg-10'>
            <div className='section-title text-center pl-40 pr-40 mb-80'>
              <span>Best Work</span>
              <h2>Interior Views</h2>
            </div>
          </div>
        </div>
        <div className='row services-active'>
          {apartments.map((apartment, index) => (
            <ApartmentCard img={apartment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;
