const Card = ({
  className = "",
  variant = "default",
  padding = "normal",
  children,
  hover = true,
}) => {
  const baseStyles = "rounded-lg shadow-md";

  const variants = {
    default: "",
    success: "",
    primary: "",
    dark: "",
  };

  const hoveraStyles = {};

  const paddingStyles = {};

  return (
    <div className={`${padding}${variant} ${hover} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
