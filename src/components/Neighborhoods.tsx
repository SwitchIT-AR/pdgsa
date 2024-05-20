import React from 'react';

interface NeighborhoodsProps {
    data: {
        neighborhoodsTitle: string;
        neighborhoods: string;
    };
}

const Neighborhoods: React.FC<NeighborhoodsProps> = ({ data }) => {
    const neighborhoods = data.neighborhoods.split('|');

    return (
        <div className="neighborhoods container my-5">
            <h2 className="text-center mb-4">{data.neighborhoodsTitle}</h2>
            <div className="row">
                {neighborhoods.map((neighborhood, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <img
                            src={neighborhood}
                            alt={`Neighborhood ${index + 1}`}
                            className="img-fluid rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Neighborhoods;
