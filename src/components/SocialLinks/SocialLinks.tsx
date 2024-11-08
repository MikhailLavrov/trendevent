import { contactsData } from '../../data/contactsData';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import c from './SocialLinks.module.css';

export const SocialLinks = () => {
  return (
    <>
      <a href={contactsData.telegram} className={`${c.socialLink} ${c.socialLink__telegram}`} target="_blank" rel="noopener noreferrer">
        <SvgIcon icon="telegram" />
        <span>Telegram</span>
      </a>
      <a href={contactsData.whatsapp} className={`${c.socialLink} ${c.socialLink__whatsapp}`} target="_blank" rel="noopener noreferrer">
        <SvgIcon icon="whatsapp" />
        <span>WhatsApp</span>
      </a>
      <a href={contactsData.vk} className={`${c.socialLink} ${c.socialLink__vk}`} target="_blank" rel="noopener noreferrer">
        <SvgIcon icon="vk" />
        <span>VK</span>
      </a>
    </>
  );
};
