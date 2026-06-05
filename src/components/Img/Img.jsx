import clsx from "clsx";
import { useState } from "react";

const Img = ({
  src = "",
  alt = "",
  loading = "",
  className = "",
  ...restProps
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      className={clsx(["overflow-hidden", className])}
      style={
        isImageLoaded
          ? null
          : {
              background: `
            radial-gradient(
              circle at 92% 8%,
              #000041 0%,
              rgba(0,0,65,.95) 12%,
              rgba(0,0,65,.4) 22%,
              transparent 40%
            ),

            radial-gradient(
              circle at 45% 25%,
              rgba(137,160,174,.95) 0%,
              rgba(137,160,174,.75) 20%,
              rgba(137,160,174,.25) 50%,
              transparent 75%
            ),

            radial-gradient(
              circle at 0% 0%,
              rgba(42,127,156,.8) 0%,
              transparent 45%
            ),

            linear-gradient(
              135deg,
              #2a7f9c 0%,
              #89a0ae 55%,
              #2a7f9c 100%
            )
          `,
            }
      }
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsImageLoaded(true)}
        className={clsx([
          "size-full object-fill transition-opacity duration-250",
          isImageLoaded ? "opacity-100" : "opacity-0",
        ])}
        {...(loading && { loading })}
        {...restProps}
      />
    </div>
  );
};

export default Img;
