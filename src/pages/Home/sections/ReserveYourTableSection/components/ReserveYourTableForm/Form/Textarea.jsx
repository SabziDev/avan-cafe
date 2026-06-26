const Textarea = ({ inputField }) => {
  return (
    <textarea
      placeholder={inputField.placeholder}
      className="h-40 w-full resize-none rounded-xl bg-cream px-4 py-1 placeholder:text-sm placeholder:text-primary/40 sm:col-span-2"
    />
  );
};

export default Textarea;
