/**
@typedef {Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "type" | "onWheel">} NumberInput
*/

/**
@param {NumberInput} props
*/
const NumberInput = ({ ...props }) => (
  <input type="number" onWheel={(e) => e.currentTarget.blur()} {...props} />
);

export default NumberInput;
