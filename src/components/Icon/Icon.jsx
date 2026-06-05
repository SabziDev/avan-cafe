const Icon = ({ className = "", src = "", ...restProps }) => (
  <svg className={className} {...restProps}>
    <use href={src} />
  </svg>
);

export default Icon;
