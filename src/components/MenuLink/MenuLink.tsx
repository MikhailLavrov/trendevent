import { useNavigate } from 'react-router-dom';
import { HeaderMenuItem } from '../../data/menuData';

interface MenuLinkProps {
  item: HeaderMenuItem;
  className?: string;
  onClickHandler?: () => void;
}

export const MenuLink = ({item, className, onClickHandler}: MenuLinkProps) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('', { replace: true });
    onClickHandler && onClickHandler();
  };

  return (
    <>
    {item?.key.length !== 0 ? (
      <a className={className} href={`#${item?.key}`} onClick={onClickHandler}>
        {item.title}
      </a>
      ) : (
      <span className={className} onClick={scrollToTop}>
        {item.title}
      </span>
    )}
    </>
  )
}
