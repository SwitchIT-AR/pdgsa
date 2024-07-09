import style from '../General.module.css';
import classes from './interior.module.css';
import React from "react";
import {CommonProps} from "../../types/globalTypes.ts";
import ModalImage from '../modalImage/ModalImage.tsx';



const InteriorCard = (props: { title: string; image: string; id: string }) => {

  return (
    <div className={``} data-toggle="modal" data-target={`#${props.id}`}>
                    <div className="shadow-sm mb-30 wow fadeInUp animate__animated" data-animation="fadeInDown animated" data-delay=".2s">
                    {/* <a style={{ textDecoration: 'none', color: 'black' }} href={`${props.image}`}  target="_blank" rel="noopener noreferrer"> */}
                          <div className={classes.imgContainer}>
                            <img src={props.image} alt="img" />
                          </div>
                          <div style={{ paddingBottom: '5px', paddingTop: '5px' }}>
                              <h4 style={{ textAlign: 'center'}}>{props.title}</h4>
                          </div>
                    {/* </a> */}
                    </div>
                </div>
  )
};

const InteriorSection: React.FC<CommonProps> = ({ data, driveUrl }) => {
  return (
    <section className={classes.sectionContainer} id='Interiores'>
            <div
              className={`${style.sectionTitle} text-center fadeInDown animated` } data-animation="fadeInDown animated" data-delay=".2s"
            >
              <span style={{ color: `${data.mainColor}` }}>
                {data.interiorsTitle}
              </span>
            </div>
            <div className={classes.cardsContainer}>
              <ModalImage src={`${driveUrl}${data.interiorCard1Image}`} alt={data.interiorCard1} id={data.interiorCardId1} />
              <ModalImage src={`${driveUrl}${data.interiorCard1Image}`} alt={data.InteriorCard2} id={data.interiorCardId2} />
              <ModalImage src={`${driveUrl}${data.interiorCard1Image}`} alt={data.interiorCard3} id={data.interiorCardId3} />
              <ModalImage src={`${driveUrl}${data.interiorCard1Image}`} alt={data.interiorCard4} id={data.interiorCardId4} />
              <InteriorCard title={data.interiorCard1} image={`${driveUrl}${data.interiorCard1Image}`} id={data.interiorCardId1} />
              <InteriorCard title={data.InteriorCard2} image={`${driveUrl}${data.interiorCard2Image}`} id={data.interiorCardId2} />
              <InteriorCard title={data.interiorCard3} image={`${driveUrl}${data.interiorCard3Image}`} id={data.interiorCardId3} />
              <InteriorCard title={data.interiorCard4} image={`${driveUrl}${data.interiorCard4Image}`} id={data.interiorCardId4} />
            </div>
    </section>
  );
};

export default InteriorSection;