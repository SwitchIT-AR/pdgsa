import React from 'react';

interface FooterProps {
    data: {
        footerText: string;
        footerLinks: string;
    };
}

const Footer: React.FC<FooterProps> = ({ data }) => {
    const footerLinks = data.footerLinks.split('|');

    return (
        <footer className="footer">
            <p>{data.footerText}</p>
            <ul>
                {footerLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link}>{link}</a>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;
