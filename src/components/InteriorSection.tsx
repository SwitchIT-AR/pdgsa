import style from './General.module.css';
import React from "react";
import {CommonProps} from "../types/globalTypes.ts";



const InteriorCard = (props: { title: string; image: string }) => {

  return (
    <div className="col-lg-6 col-md-4">
                    <div className="shadow-sm single-post mb-30 wow fadeInUp animate__animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <a style={{ textDecoration: 'none', color: 'black' }} href={`${props.image}`}  target="_blank" rel="noopener noreferrer">
                          <div className="blog-thumb  p-2 ">
                            <img src={props.image} alt="img" />
                          </div>
                          <div style={{ paddingBottom: '5px' }}>
                              <h4 style={{ textAlign: 'center'}}>{props.title}</h4>
                          </div>
                    </a>
                    </div>
                </div>
  )
};

const InteriorSection: React.FC<CommonProps> = ({ data, driveUrl }) => {
  return (
    <section id='Interiores' className='mt-50'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-8 col-lg-10'>
            <div

              className={`${style.sectionTitle} text-center pl-40 pr-40 mb-80  fadeInDown animated` } data-animation="fadeInDown animated" data-delay=".2s"
            >
              <span style={{ color: `${data.mainColor}` }}>
                {data.interiorsTitle}
              </span>
            </div>
            <div className='row'>
              
              <InteriorCard title={data.interiorCard1} image={`${driveUrl}${data.interiorCard1Image}`} />
              <InteriorCard title={data.InteriorCard2} image={`${driveUrl}${data.interiorCard2Image}`} />
              <InteriorCard title={data.interiorCard3} image={`${driveUrl}${data.interiorCard3Image}`} />
              <InteriorCard title={data.interiorCard4} image={`${driveUrl}${data.interiorCard4Image}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorSection;