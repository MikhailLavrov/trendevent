import Icons from '../../assets/sprite.svg';

interface SvgIconProps {
  icon: string;
  style?: React.CSSProperties;
  className?: string;
}

export const SvgIcon = ({icon, style, className}: SvgIconProps) => {
  return (
    <svg width={50} height={50} data-svg-icon style={style} className={className}>
      <use href={`${Icons}#${icon}`} />
   </svg>
  )
}
