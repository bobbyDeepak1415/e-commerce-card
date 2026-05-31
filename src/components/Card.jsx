
const Card = ({className,variant="default",padding="0px",children,hover=true}) => {

    const baseStyles={

    }

    const variants={
        default:"",
        success:"",
        primary:"",
        dark:""
    }

    const hoveraStyles={

    }

    const paddingStyles={

    }

  return (
    <div className={`${padding}${variant} ${hover} ${className}`}>
      {children}
    </div>
  )
}

export default Card
