
const CardHeader = ({children,className=''}) => {
  return (
    <div className={`${className} mb-4`}> 
      {children}
    </div>
  )
}

export default CardHeader
