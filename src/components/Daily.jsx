import axios from 'axios'
import { useState, useEffect } from 'react'

function Daily({ long, lat }) {

  //! Exibir Temperatura(current.temp), sensação termíca(feels_like) Humidade do ar(current.humidity) nebulosidade(current.clouds)
  //! Exibir Raios UV (current.uvi)

  const [temp, setTemp] = useState();
  const [feels, setFeels] = useState();
  const [humidity, setHumidity] = useState();
  const [clouds, setClouds] = useState();
  const [uv, setUv] = useState()

  useEffect(() => {
    if (long !== null && lat !== null && long !== undefined && lat !== undefined) {
      getWheather();
    }
  }, [long, lat]);

  const strLong = String(long)
  const strLat = String(lat)

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${strLat}&lon=${strLong}&units=metric&exclude=minutely,hourly&appid=a45c408c1bd267bfb06e70838483798a`

  const getWheather = async () => {
    await axios.get(url).then((response) => {
      setTemp(response.data.current.temp);
      setFeels(response.data.current.feels_like);
      setHumidity(response.data.current.humidity);
      setClouds(response.data.current.clouds);
      setUv(response.data.current.uvi);
    }
    ).catch((error) => {
      console.log(error, 'Aconteceu um erro')
    })
  }

  return (
    <div className='bg-blue-700 rounded-xl w-96 h-96 ml-12 mt-12 ml-64 pt-2'>
      <div className='ml-8 mt-5 inline-grid grid-cols-1 gap-6'>
      <div className='grid grid-cols-2'>
      <h1 className='mb-2 font-bold text-3xl'>Clima Hoje</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/2925/2925521.png" alt=""  className='w-10 ml-3'/>
    </div>
      <p className='mb-2'>Temperatura: {temp}</p>
      <p className='mb-2'>Sensação Termica: {feels}</p>
      <p className='mb-2'>Raios UV:{uv}</p>
      <p className='mb-2'>Humidade do ar: {humidity}</p>
      <p className='mb-2'>Nuvens: {clouds}%</p>
      </div>
    </div>
  )
}

export default Daily