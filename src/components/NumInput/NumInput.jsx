const NumInput = ({ name, value, placeholder, ...restProps }) => {
  return (
    <input
      type="number"
      name={name}
      value={value}
      placeholder={placeholder}
      onWheel={(e) => e.target.blur()}
      {...restProps}
    />
  );
};

export default NumInput;
