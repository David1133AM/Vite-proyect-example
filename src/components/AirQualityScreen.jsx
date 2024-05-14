import React from 'react';
import Componente1 from './Componente1';
const AirQualityScreen = () => {
  return (
    <>
    <div> Aplicacion para la acalidad del aire</div>
    <div className='card card-info'>
        <div className='card-header'>
          <h4 className='card-title'>Datos del aire</h4>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-xs-12'>
                <Componente1 valor={10} text="CO" icono="far fa-paper-plane" color="bg-primary" />
            </div>
            <div className='col-lg-4 col-md-6 col-xs-12'>
                <Componente1 valor={5.7} text="CO" icono="far fa-surprise" color="bg-orange" />                
            </div>
            <div className='col-lg-4 col-md-6 col-xs-12'>
                <Componente1 valor={9} text="CO" icono="far fa-surprise" color="bg-orange" />                
            </div>
          </div>
        </div>
        <div className='card-footer'>
        <button className='btn btn-secondary'>Cancelar</button>
          <button className='btn btn-success float-right'>Aceptar</button>
        </div>
    </div>
    </>
  )
}
export default AirQualityScreen;