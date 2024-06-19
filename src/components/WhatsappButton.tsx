import whatsapp from "../assets/whatsapp-logo.png";

const WhatsappButton = () => {
  return (
    <div style={{ position: 'absolute'}}>
      <a
        href="https://wa.me/905555555555"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src={whatsapp} style={{ width: '50px', height: 'auto'}} alt="whatsapp" />
      </a>
    </div>
  );
};

export default WhatsappButton;
