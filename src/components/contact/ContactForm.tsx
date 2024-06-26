import React, { useState } from 'react';
import axios from 'axios';
import {CommonProps} from "../../types/globalTypes.ts";
import classes from './contact.module.css';


const ContactForm: React.FC<CommonProps> = ({ data }) => {
    const [name, setName] = useState('');
    const [mail, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [body, setMessage] = useState('');
    const [invalid, setInvalidate] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(false);
        setError(false);

        if (!name || !mail || !phone) {
            setInvalidate(true);
            return;
        } else if (invalid) {
            setInvalidate(true);
        }

        try {
            const response = await axios.post('https://pdgsa.switchit.com.ar/submit', {
                name,
                mail,
                phone,
                body,
            });

            if (response.status === 200) {
                setSubmitted(true);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
    };


    return (
        <div id='Contactanos' className="container mb-50">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                    <div className={classes.sectionTitle}>
                        <span>{data.contactTitle}</span>
                        <h2>{data.contactSubtitle}</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact-info">
                        <div className="single-cta pb-30 mb-30">
                            <a target="_blank" rel="noopener" href="https://www.google.com/maps/place/Jardines+del+Frances/@8.606561,-82.426911,12z/data=!4m6!3m5!1s0x8fa5919ff3e3698f:0xa64f1082b2edc033!8m2!3d8.6065606!4d-82.426911!16s%2Fg%2F11v9hky864?hl=es-419&entry=ttu" >
                            <div className="f-cta-icon">
                                <i className="far fa-map"></i>
                            </div>
                            <h5>Ubicacion</h5>
                            <p>{data.contactAddress}</p>
                            </a>
                        </div>
                        <div className="single-cta pb-30 mb-30">
                            <div className="f-cta-icon">
                                <i className="far fa-clock"></i>
                            </div>
                            <h5>Horario de Atención</h5>
                            <p>{data.contactTime}</p>
                        </div>
                        <div className="single-cta pb-30 mb-30">
                            <div className="f-cta-icon">
                                <i className="far fa-envelope-open"></i>
                            </div>
                            <h5>Escríbenos</h5>
                            <p>Siempre estamos disponibles para atender tu consulta: <a href={data.contactMail}>{data.contactMail}</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className={`${classes.contactField} p-relative c-name mb-40`}>
                                    <label className={classes.label} htmlFor='contactName'>Nombre y Apellido <span>*</span></label>
                                    <input
                                        id='contactName'
                                        type="text"
                                        placeholder="Ej. Juan Perez"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={`${classes.contactField} p-relative c-name mb-40`}>
                                <label className={classes.label} htmlFor='contactMail'>Correo Electrónico <span>*</span></label>
                                    <input
                                        id='contactMail'
                                        type="mail"
                                        placeholder="Ej: juan_perez@email.com"
                                        value={mail}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={`${classes.contactField} p-relative c-name mb-40`}>
                                <label className={classes.label} htmlFor='contactName'>WhatsApp <span>*</span></label>
                                    <input
                                        type="phone"
                                        placeholder="Ej: 50762011500"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className={`${classes.contactField} p-relative c-name mb-40`}>
                                    <textarea
                                        name="body"
                                        id="body"
                                        cols={30}
                                        rows={10}
                                        placeholder="Dejanos tu consulta"
                                        value={body}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <p>{data.contactTerms}</p>
                                <div>
                                    Los campos Nombre y Apellido, Email y Teléfono son necesarios para continuar con la consulta.
                                </div>
                                <div className={classes.centerDivContent}>
                                <button
                                    type="submit"
                                    className="btn"
                                    style={{
                                        backgroundColor: `${data.mainColor}`,
                                        color: 'white',
                                        borderRadius: '20px',
                                        fontSize: '20px',
                                        padding: '5px 10px',
                                    }}
                                >
                                    Enviar Mensaje
                                </button>
                                </div>
                                {submitted && <p className="text-success mt-3">El mensaje ha sido enviado!</p>}
                                {error &&
                                    <p className="text-danger mt-3">Ocurrió un problema al enviar el mensaje, intente de nuevo.</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
