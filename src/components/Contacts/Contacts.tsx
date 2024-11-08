import c from './Contacts.module.css';
import MAP from '../../assets/map.webp';
import { ClockCircleOutlined, EnvironmentOutlined, MailOutlined, MobileOutlined } from '@ant-design/icons';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { contactsData } from '../../data/contactsData';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export const ContactsComponent = () => {
  
  const mapLink: string = isMobile
  ? `yandexnavi://build_route_on_map?lat_to=${contactsData.lat}&lon_to=${contactsData.lon}`
  : `https://yandex.ru/maps/?rtext=~${contactsData.lat},${contactsData.lon}`;
  
  return (
    <section className={c.contacts} id='contacts'>
      <div className={`${c.contacts__container} container`}>
        <h2 className={c.contacts__header}>Наши контакты</h2>
        <div className={c.contacts__innerContainer}>
          <div className={c.contacts__infoWrapper}>
            <div className={c.contacts__item}>
              <ClockCircleOutlined />
              <p>{contactsData.openingHours}</p>
            </div>
            <div className={c.contacts__item}>
              <MobileOutlined />
              <a href={`tel:${contactsData.phone}`}>{contactsData.phoneMasked}</a>
            </div>
            <div className={c.contacts__item}>
              <EnvironmentOutlined />
              <a href={mapLink} target="_blank" rel="noopener noreferrer">
                {contactsData.address}
              </a>
            </div>
            <div className={c.contacts__item}>
              <MailOutlined />
              <a href={`mailto:${contactsData.email}`}>{contactsData.email}</a>
            </div>
            <div className={c.socialsWrapper}>
              <SocialLinks />
            </div>
          </div>
          <div className={c.contacts__map}>
            <img width={200} src={MAP} alt="Карта" />
          </div>
        </div>
      </div>
    </section>
  );
};
