const Input = ({ inputField }) => {
  return (
    <input
      type={inputField.type}
      placeholder={inputField.placeholder}
      className="h-10 rounded-xl bg-cream px-4 py-1 placeholder:text-sm placeholder:text-primary/40"
    />
  );
};

export default Input;
