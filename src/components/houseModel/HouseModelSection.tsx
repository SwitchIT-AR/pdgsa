import style from './houseModel.module.css';
import React, { useState } from 'react';
import { CommonProps } from '../../types/globalTypes.ts';
import ModalImage from '../modalImage/ModalImage.tsx';

const HouseModelCard = ({
  data1,
  data2,
  driveUrl,
}: {
  data1: string;
  data2: string;
  driveUrl: string;
}) => {
  return (
    <div className={style.imgGroup}>
      <ModalImage
        src={`${driveUrl}${data1}`}
        alt='model home1'
        id={`${data1}`}
      />
      <ModalImage
        src={`${driveUrl}${data2}`}
        alt='model home2'
        id={`${data2}`}
      />
      <div
        className={style.imgContainer}
        data-toggle='modal'
        data-target={`#${data2}`}
      >
        <img
          src={`${driveUrl}${data2}`}
          className={style.imgResponsive}
          alt='model home2'
        />
      </div>
      <div
        className={style.imgContainer}
        data-toggle='modal'
        data-target={`#${data1}`}
      >
        <img
          src={`${driveUrl}${data1}`}
          className={style.imgResponsive}
          alt='model home1'
        />
      </div>
    </div>
  );
};

const HouseModelSection: React.FC<CommonProps> = ({ data, driveUrl }) => {
  const [activeModel, setActiveModel] = useState('1 Planta');

  return (
    <section
      id='Modelo de Casa'
      className={`${style.sectionContainer}`}
    >
      <div
        className={`${style.sectionTitle} text-center pl-40 pr-40  fadeInDown animated`}
      >
        <span
          className={style.homeModelTitle}
          style={{ color: `var(--main-color)` }}
        >
          {data.modelHomeTitle}
        </span>
        <div className={style.buttonsContainer}>
          <h2
            // style={{ fontSize: '11px'}}
            className={`${style.homeModelSubitle} longSubtitle ${
              activeModel === data.modelHome1Subtitle ? style.active : ''
            }`}
            onClick={() => setActiveModel(data.modelHome1Subtitle)}
          >
            {data.modelHome1Subtitle}
          </h2>
          <h2
            className={`${style.homeModelSubitle} ${
              activeModel === data.modelHome2Subtitle ? style.active : ''
            }`}
            onClick={() => setActiveModel(data.modelHome2Subtitle)}
          >
            {data.modelHome2Subtitle}
          </h2>
          <h2
            className={`${style.homeModelSubitle} ${
              activeModel === data.modelHome3Subtitle ? style.active : ''
            }`}
            onClick={() => setActiveModel(data.modelHome3Subtitle)}
          >
            {data.modelHome3Subtitle}
          </h2>
        </div>
      </div>
      {/* <div className='row justify-content-center'> */}
        <div>
          {activeModel === data.modelHome1Subtitle ? (
            <HouseModelCard
              data1={data.modelHome1Image1}
              data2={data.modelHome1Image2}
              driveUrl={driveUrl}
            />
          ) : activeModel === data.modelHome2Subtitle ? (
            <HouseModelCard
              data1={data.modelHome2Image1}
              data2={data.modelHome2Image2}
              driveUrl={driveUrl}
            />
          ) : (
            <HouseModelCard
              data1={data.modelHome3Image1}
              data2={data.modelHome3Image2}
              driveUrl={driveUrl}
            />
          )}
        </div>
      {/* </div> */}
    </section>
  );
};

export default HouseModelSection;
