import React from 'react';

interface TestimonialsProps {
    data: {
        testimonialsTitle: string;
        testimonials: string;
    };
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
    const testimonials = data.testimonials.split('|');

    return (
        <div className="testimonials container my-5">
            <h2 className="text-center mb-4">{data.testimonialsTitle}</h2>
            <div className="list-group">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="list-group-item list-group-item-action">
                        {testimonial}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
