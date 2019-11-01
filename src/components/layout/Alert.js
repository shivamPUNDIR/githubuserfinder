import React from 'react'

const Alert = ({ alert }) => {
    
      if ( alert !== null){
        return (
            (
                <div className={`alert alert-${alert.type}`}>
                     <i className="fa fa-info-circle"></i>{alert.msg} 
                </div>
            )
        )
      }
      else{
          return null
      }
    
}

export default Alert
