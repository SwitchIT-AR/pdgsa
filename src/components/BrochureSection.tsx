interface BrochureSectionProps {
  data:{
    brochureImage: string;
    brochurePdf: string;
  },
  driveUrl: string;
}

const BrochureSection: React.FC<BrochureSectionProps> = ({ data, driveUrl }) => {
  return (
    <section id="about" className="about-area about-p pt-120 pb-120 p-relative">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-content">
                        <div className="about-title">
                            
                            <h2>Welcome To Our Relxtower</h2>
                            
                        </div>
                        
                        <a href="#" className="btn">Get Started</a>
                    </div>
                </div>
                <div className="col-lg-6">
                <div style={{ objectFit: 'cover' }}>
                  <img src={`${driveUrl}${data.brochureImage}`} style={{ width: '70%', height: 'auto' }} alt="img" />
                </div>
                </div>


            </div>
        </div>
    </section>
  )
}

export default BrochureSection;