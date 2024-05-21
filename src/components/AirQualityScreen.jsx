import React, { useEffect, useState } from 'react';
import Componente1 from './Componente1';

const AirQualityScreen = () => {
  const [city,setCity] = useState('Puebla');
  const [aqi, setAqi] = useState(0);
  const [source, setSource] = useState('SNICA');
  const [station, setStation] = useState('Conocida');
  const [CO, setCO] = useState(0);
  const [dew, setDew] = useState(0);
  const [h, setH] = useState(0);
  const [no2, setNo2] = useState(0);
  const [o3, setO3] = useState(0);
  const [p, setp] = useState(0);
  const [pm10, setPm10] = useState(0);
  const [pm25, setPm25] = useState(0);
  const [So2, setSo2] = useState(0);
  const [t, setT] = useState(0);
  const [w, setW] = useState(0);
  const [wg, setWg] = useState(0);
  const [time, settime] = useState('2024-05-17 00:00:00');
  const [scale, setScale] = useState(['primary','desconocida','por determinar'])
  document.getElementById("Busqueda")
  const getAQI = async (city) => {
    const token = 'a76f9558ad9b42afb92be9f0aa5c723b2ce939bf'

    const url = `https://api.waqi.info/feed/${city}/?token=${token}`;
    const response = await fetch(url);
    const data=  await response.json()
    console.log(data);
    setCity(data.data.city.name);
    setAqi(data.data.aqi);
    setSource(data.data.attributions[0]);
    settime(data.data.time.s);
   setScale(getScale(data.data.aqi));
  }

  const getScale = (aqi) => {
    let color ="";
    let nivel = "";
    let mensaje = "";
    switch (true) {
      case aqi >= 0 && aqi <= 50:
        color = "success"
        nivel = "Buena :D"
        mensaje = "La calidad del aire se considera satisfactoria y la contaminación del aire representa poco o ningún riesgo.";
        break;
      case aqi >= 51 && aqi <=100:
        color = "warning"
        nivel = "Moderado :/"
        mensaje ="	La calidad del aire es aceptable; sin embargo, para algunos contaminantes puede haber un problema de salud moderado para un número muy pequeño de personas que son inusualmente sensibles a la contaminación del aire"
        break;
      case aqi >= 101 && aqi <=150:
        color = "orange"
        nivel = "Dañino para la salud  de los grupos sensativos"
        mensaje ="Los miembros de grupos sensibles pueden experimentar efectos sobre la salud. No es probable que el público en general se vea afectado"
        break;
      case aqi >= 151 && aqi <=200:
          color = "danger"
          nivel = "MUY Dañino para la salud "
          mensaje ="	Todo el mundo puede empezar a experimentar efectos sobre la salud; Los miembros de grupos sensibles pueden experimentar efectos más graves para la salud."
          break;
      case aqi >= 201 && aqi <=300:
            color = "purple"
            nivel = "MUY Dañino para la salud "
            mensaje ="Advertencias sanitarias de condiciones de emergencia. Es más probable que toda la población se vea afectada."
            break; 
      default:
        color = "maroon"
            nivel = "PELIGROSO"
            mensaje ="	Alerta de salud: todos pueden experimentar efectos de salud más graves"
        break;
    }

    return [color,nivel,mensaje]
  }
  useEffect(() =>{
    getAQI(city);
  },[])
  return (
    <>
    <div className='row'>
        <div className='col-12'>
          <div className='card card-primary'>
            <div className='card-body'>
              <div className='form-group'>
                <label>Buscar</label>
                <input type='text' className='form-control' placeholder='Ciudad, Estacion o Pais' value={city} onChange={e => setCity(e.target.value)}/> 
              </div>
            </div>
            <div className='card-footer text-center'>
              <button className='btn bg-purple btn-lg' onClick={() => getAQI(city)}>Aceptar</button>
            </div>
          </div>
        </div>
    </div>
    <div> <a href={source.url} target='_blank' title='Ir al sitio'>{source.name}</a></div>
    <div className='card card-info'>
        <div className='card-header'>
          <h4 className='card-title'>{city}</h4>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              <Componente1 valor={aqi} text="AQI" icono="far fa-paper-plane" color={` bg-${scale[0]}`} descripcion={scale[1]}/>
            </div>
            <div className='col-md-6 col-xs-12'>
              <p>
                {scale[2]}
              </p>
            </div>
          </div>
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