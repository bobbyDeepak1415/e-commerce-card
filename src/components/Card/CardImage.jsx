
const CardImage = ({src,alt="Card Image",className=""}) => {
  return (
    <div className={`w-full h-48 overflow-hidden rounded-t-lg`}>
      {src? (
        <img className="w-full h-full obje" alt={alt} src={src} className={``}/>
      ):(
        <div className={`w-full h-full bg-linear-to-r from-gray-100 to-gray-300`}>
          <span>No Image available</span>
        </div>

      )}
      
    </div>
  )
}

export default CardImage
