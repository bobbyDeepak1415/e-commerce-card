const Card = ({
  children,
  className = "",
  variant = "default",
  padding = "normal",
  hover = true,
}) => {
  const baseStyles = "shadow-md rounded-lg transition-all duration-300";

  const variants = {
    default: "bg-white border border-gray-200",
    primary: "bg-blue-50 border border-blue-300",
    success: "bg-green-100 border border-green-300",
    dark: "bg-gray-800 broder border-gray-600 text-white",
  };

  const hoverStyles = hover ? "hover:shadow-xl hover:translate-x-1" : "";

  const paddingStyles = {
    none: "p-0",
    small: "p-4",
    normal: "p-6",
    large: "p-8",
  };

  return (
    <div
      className={`${className} ${paddingStyles[padding]} ${variants[variant]} ${hoverStyles} ${baseStyles}`}
    >
      {children}
    </div>
  );
};

export default Card;
