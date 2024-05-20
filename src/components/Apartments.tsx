import React from 'react';

interface ApartmentsProps {
    data: {
        apartmentsTitle: string;
        apartments: string;
    };
}

const Apartments: React.FC<ApartmentsProps> = ({ data }) => {
    const apartments = data.apartments.split('|');

    return (
        <div className="apartments container my-5">
            <h2 className="text-center mb-4">{data.apartmentsTitle}</h2>
            <div className="row">
                {apartments.map((apartment, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <img
                            src={apartment}
                            alt={`Apartment ${index + 1}`}
                            className="img-fluid rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Apartments;
