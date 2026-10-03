/**
 * @typedef {Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "type" | "onWheel">} NumInputProps
 */

/**
 * @param {NumInputProps} props
 */
const NumInput = ({ ...props }) => (
  <input type="number" onWheel={(e) => e.target.blur()} {...props} />
);

export default NumInput;
