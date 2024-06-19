interface InteriorSectionProps {
  data: {
    interiorsTitle: string;
    interiorCard1: string;
    interiorCard1Image: string;
    InteriorCard2: string;
    interiorCard2Image: string;
    interiorCard3: string;
    interiorCard3Image: string;
    interiorCard4: string;
    interiorCard4Image: string;
  },
  driveUrl: string;
}


const InteriorSection: React.FC<InteriorSectionProps> = ({ data, driveUrl }) => {
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
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;