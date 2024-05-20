import React from 'react';

interface BrandProps {
    data: {
        brandTitle: string;
        brandLogos: string;
    };
}

const Brand: React.FC<BrandProps> = ({ data }) => {
    const brandLogos = data.brandLogos.split('|');

    return (
        <div className="brand container my-5">
            <h2 className="text-center mb-4">{data.brandTitle}</h2>
            <div className="row">
                {brandLogos.map((logo, index) => (
                    <div key={index} className="col-md-3 col-6 mb-4">
                        <img src={logo} className="img-fluid" alt={`Brand Logo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brand;
