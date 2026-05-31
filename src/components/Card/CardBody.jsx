
const CardBody = ({className="",children}) => {
  return (
    <div className={`${className} text-gray-600`}>
      {children}
    </div>
  )
}

export default CardBody
