// import clsx from "clsx";

// const Button = ({ children, className, ...props }) => {
//   return (
//     <button
//       className={clsx(
//         "px-5 py-2 rounded-lg bg-white text-black font-medium hover:opacity-90 transition",
//         className,
//       )}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
import React from "react";

const Button = ({
  children,
  className = "",
  variant = "primary",
  onClick,
  type = "button",
}) => {
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
