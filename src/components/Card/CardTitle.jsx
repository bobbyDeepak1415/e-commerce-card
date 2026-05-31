const CardTitle = ({ children, className = "" }) => {
  return <h3 className={`font-bold mb-2 ${className} text-2xl`}>{children}</h3>;
};

export default CardTitle;
