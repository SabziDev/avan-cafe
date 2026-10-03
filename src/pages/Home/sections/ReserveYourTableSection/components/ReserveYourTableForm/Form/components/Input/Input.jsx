const Input = ({ inputField }) => {
  return (
    <input
      type={inputField.type}
      name={inputField.name}
      placeholder={inputField.placeholder}
      autoComplete={inputField.name}
      className="h-10 rounded-xl bg-cream px-4 py-1 placeholder:text-sm placeholder:text-primary/40"
    />
  );
};

export default Input;
