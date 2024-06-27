import { useRef, useState } from 'react';
import classes from './modal.module.css';
import axios from 'axios';
import { CommonProps } from '../../types/globalTypes';

const Modal: React.FC<CommonProps> = ({ data }) => {
  const [name, setName] = useState('');
  const [mail, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [validation, setValidation] = useState<boolean>(false);
  const modalRef = useRef<HTMLButtonElement>(null);
  const pdfRef = useRef<HTMLAnchorElement>(null);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // setSubmitted(false);
    setError(false);

    

    if (!name || !mail || !phone) {
      setValidation(true);
      return;
    }

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
        // setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setValidation(false);
        if (modalRef.current && pdfRef.current) {
          modalRef.current.click();
          pdfRef.current.click();
        }
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
        className='modal'
        
        id='brochureModal'
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
              {
                    validation &&
                      <div style={{ fontSize: '12px', color: 'red', marginBottom: '10px'}}>Por favor, complete todos los datos para continuar.</div>
                  }
              {
                    error &&
                      <div style={{ fontSize: '12px', color: 'red', marginBottom: '10px'}}>Ah ocurrido un error, por favor intentelo nuevamente.</div>
                  }
                <div className='mb-1'>
                  <label htmlFor='name'>Nombre y Apellido <span style={{ color: 'red' }}>*</span></label>
                  <input
                    className='form-control'
                    id='name'
                    aria-describedby='nombre'
                    placeholder='Ej: Juan Perez'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </div>
                <div className='mb-1'>
                  <label htmlFor='email'>Correo Electrónico <span style={{ color: 'red' }}>*</span></label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    aria-describedby='nombre'
                    placeholder='Ej: juan_perez@email.com'
                    onChange={(e) => setEmail(e.target.value)}
                    value={mail}
                    required
                  />
                </div>
                <div className='mb-1'>
                  <label htmlFor='phone'>Teléfono <span style={{ color: 'red' }}>*</span></label>
                  <input
                    type='number'
                    className='form-control'
                    id='phone'
                    placeholder='Ej: 50723456789'
                    style={{ color: 'gray' }}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                  />
                  
                </div>
              </div>
              <div className='' style={{ borderTop: '0.5px solid #DEE2E6', padding: '8px 10px 8px 10px' }}>
                  <p style={{ margin: 0, fontSize: '8px', textAlign: 'center', marginBottom: '5px' }}><a target="_blank" rel="noopener" href={`${data.contactTerms}`} style={{ textDecoration: 'none', color: '#6E6E6E', }}>Acepto los términos de las Políticas de Privacidad y Proteccíon de Datos Personales</a></p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-dismiss='modal'
                    onClick={() => setValidation(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    id='button-modal'
                    type='submit'
                    // data-dismiss='modal'
                    className='btn'
                    style={{ backgroundColor: 'var(--main-color)', color: 'white' }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Enviar y Descargar  
                  </button>
                    <a ref={pdfRef} href={`${data.brochurePdf}`} target="_blank" rel="noopener noreferrer" download style={{ display: 'none' }} />
                  <button ref={modalRef} style={{ display: 'none' }} type='button' data-dismiss='modal' id='hiddenClose'>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
