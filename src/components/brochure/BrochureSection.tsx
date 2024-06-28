import React from "react";
import {CommonProps} from "../../types/globalTypes.ts";
import classes from './brochure.module.css';
import Modal from "../modal/Modal.tsx";



const BrochureSection: React.FC<CommonProps> = ({ data, driveUrl }) => {
  return (
    <section id='Brochure' className={`${classes.brochureSection} pt-50 pb-50`}>
      <div className='container'>
      <div className='row justify-content-center'>
        <div className={classes.contentContainer}>
              <div className={`${classes.centerTitle}`}>
                <h2>{data.brochureTitle}</h2>
              </div>
              <Modal data={data} driveUrl={driveUrl} />
              <div className={classes.centerDivContent}>
              <a
                href='#'
                style={{
                  backgroundColor: `var(--main-color)`,
                  color: 'white',
                  borderRadius: '50px',
                  fontSize: '25px',
                  padding: '5px 40px',
                }}
                className='btn'
                data-toggle="modal"
                data-target="#brochureModal"
              >
                Descargar
              </a>
              </div>
          </div>

          <div className='col-lg-5'>
            <div className={classes.imgContainer}>
              <a href="#" data-toggle="modal" data-target="#brochureModal">
                <img
                  src={`${driveUrl}${data.brochureImage}`}
                  style={{ width: '100%', height: 'auto' }}
                  alt='img'
                />
              </a>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default BrochureSection;
