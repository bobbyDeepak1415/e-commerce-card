const Card = ({ children, className = "", variant, padding, hover = true }) => {

    
  const baseStyles = "shadow-md rounded-lg transition-all duration-300";

  const variants = {
    default: "bg-gray-100 border border-gray-700",
    primary: "bg-blue-100 border border-blue-300",
    success: "bg-green-100 border border-green-300",
    dark: "bg-gray-800 broder border-gray-600 text-white",
  };

  const hoverStyles = hover ? "hover:shadow-lg hover:-transition-y-1" : "";

  const paddingStyles = {
    none: "p-0",
    small: "p-4",
    medium: "p-6",
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
