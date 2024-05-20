import React, { useState } from 'react';
import axios from 'axios';

interface ContactFormProps {
    data: {
        contactFormTitle: string;
        contactFormDescription: string;
        contactFormFields: string;
        contactFormButton: string;
    };
}

const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(false);
        setError(false);

        try {
            const response = await axios.post('http://localhost:5000/submit', {
                name,
                email,
                message,
            });

            if (response.status === 200) {
                setSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
    };

    const fields = data.contactFormFields.split('|');

    return (
        <div className="contact-form">
            <h2>{data.contactFormTitle}</h2>
            <p>{data.contactFormDescription}</p>
            <form onSubmit={handleSubmit}>
                {fields.includes('name') && (
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                )}
                {fields.includes('email') && (
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                )}
                {fields.includes('message') && (
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                )}
                <button type="submit">{data.contactFormButton}</button>
                {submitted && <p>Thank you for your message!</p>}
                {error && <p>There was an error submitting your message. Please try again.</p>}
            </form>
        </div>
    );
};

export default ContactForm;
