import whatsapp from "../assets/whatsapp-logo.png";
import { CommonProps } from "../types/globalTypes";

const WhatsappButton: React.FC<CommonProps> = ({ data }) => {
  const phoneNumber = data.whatsappNumber || '573002222222';
  return (
    <div style={{ zIndex: 10000, position: 'fixed', bottom: 30, right: 30}}>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src={whatsapp} style={{ width: '100px', height: 'auto'}} alt="whatsapp" />
      </a>
    </div>
  );
};

export default WhatsappButton;
