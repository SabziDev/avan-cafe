const NumInput = ({
  name = "",
  placeholder = "",
  className = "",
  ...restProps
}) => {
  return (
    <input
      type="number"
      name={name}
      placeholder={placeholder}
      onWheel={(e) => e.target.blur()}
      className={className}
      {...restProps}
    />
  );
};

export default NumInput;
