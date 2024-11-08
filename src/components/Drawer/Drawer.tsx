import { useState } from 'react';
import { Button, Drawer, Divider } from 'antd';
import c from './Drawer.module.css'
import { Image } from "antd";
import LOGO_IMG from '../../assets/logo.svg';
import { MenuOutlined, MobileOutlined } from '@ant-design/icons';
import { headerMenu } from '../../data/menuData';
import { MenuLink } from '../MenuLink/MenuLink';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { contactsData } from '../../data/contactsData';

export const DrawerComponent = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const menuItems: JSX.Element[] = headerMenu.map((item, i) => {
    return (
      <li className={c.menu__item} key={item.key}>
        <MenuLink
          item={item}
          onClickHandler={onClose}
        />
      </li>
    );
  });

  return (
    <>
      <Button onClick={showDrawer} icon={<MenuOutlined />} className={c.burger__button} aria-label="Открыть меню" />
      <Drawer 
        className={'header__drawer'} 
        onClose={onClose} 
        open={open}
        title={<Image width={100} src={LOGO_IMG} preview={false} />}
      >
        <div className={c.drawerWrapper}>
          <ul className={c.menu}>
            {menuItems}
          </ul>
          <Divider />
          <a className={c.phoneLink} href={`tel:${contactsData.phone}`} aria-label="Позвонить">
            <MobileOutlined />
            {contactsData.phoneMasked}
          </a>
          <div className={c.socialsWrapper}>
            <SocialLinks />
          </div>
        </div>
      </Drawer>
    </>
  );
};
