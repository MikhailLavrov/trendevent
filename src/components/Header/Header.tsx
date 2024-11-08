import c from './Header.module.css';
import { DrawerComponent } from '../Drawer/Drawer';
import { headerMenu } from '../../data/menuData';
import { MenuLink } from '../MenuLink/MenuLink';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const HeaderComponent = () => {
  const menuItems = headerMenu.map((item, i) => {
    return (
      <li className={c.header__menuItem} key={item.key}>
        <MenuLink item={item} />
      </li>
    );
  });

  return (
    <header className={c.header}>
      <div className={`${c.header__container} container`}>
        <ul className={c.header__menu}>
          {menuItems}
        </ul>
        <div className={c.socialsWrapper}>
          <SocialLinks />
        </div>
        <DrawerComponent />
      </div>
    </header>
  );
};
