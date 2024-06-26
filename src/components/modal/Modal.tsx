import { MouseEvent, useState } from 'react';
import classes from './modal.module.css';
import axios from 'axios';

const Modal = () => {
  const [name, setName] = useState('');
  const [mail, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    try {
      const response = await axios.post(
        'https://pdgsa.switchit.com.ar/submit',
        {
          name,
          mail,
          phone,
          body: 'Enviado desde Brochure',
        }
      );

      if (response.status === 200) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <div
        className='modal fade'
        id='exampleModalCenter'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <form>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLongTitle'>
                  Descarga Brochure
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className={`${classes.form} modal-body`}>
                <div className='mb-1'>
                  <label htmlFor='name'>Nombre y Apellido</label>
                  <input
                    className='form-control'
                    id='name'
                    aria-describedby='nombre'
                    placeholder='Ej: Juan Perez'
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <div className='invalid-feedback'>Por favor, completar con Nombre y Apellido.</div>
                </div>
                <div className='mb-1'>
                  <label htmlFor='email'>Correo Electrónico</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    aria-describedby='nombre'
                    placeholder='Ej: juan_perez@email.com'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className='invalid-feedback'>Por favor, completar con un Email valido.</div>
                </div>
                <div className='mb-1'>
                  <label htmlFor='phone'>Teléfono</label>
                  <input
                    type='number'
                    className='form-control'
                    id='phone'
                    placeholder='Ej: 50723456789'
                    style={{ color: 'gray' }}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <div className='invalid-feedback'>Por favor, completar con un telefono.</div>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'
                >
                  Cerrar
                </button>
                <button
                  type='submit'
                  data-dismiss='modal'
                  className='btn'
                  style={{ backgroundColor: 'var(--main-color)', color: 'white' }}
                  onClick={(e) => handleSubmit(e)}
                >
                  Enviar y Descargar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
