import React from 'react';

interface ServicesProps {
    data: {
        servicesTitle: string;
        services: string;
    };
}

const Services: React.FC<ServicesProps> = ({ data }) => {
    const services = data.services.split('|');

    return (
        <div className="services">
            <h2>{data.servicesTitle}</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
