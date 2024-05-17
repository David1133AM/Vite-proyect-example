import React from 'react'

const Componente1 = ({valor,text,color,icono,descripcion  }) => {
  return (
    <>
      <div className={`small-box ${color}`}>
        <div className='inner'>
          <h3>{valor}</h3>
          <p>{text}</p>
        </div>
        <div className='icon'>
          <i className={icono}></i>
        </div>
        <a href="#" className='small-box-footer '>{descripcion}</a>
      </div>
    </>
    
  )
}

export default Componente1
