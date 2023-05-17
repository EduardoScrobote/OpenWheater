import axios from 'axios'
import { useState } from 'react'

function Header({ setLong, setLat }) {

    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [region, setRegion] = useState('')

    const handleChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }

    const getGeoLocal = async () => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=a45c408c1bd267bfb06e70838483798a`).then((response) => {
            setRegion(response.data[0].state)
            setLong(response.data[0].lon)
            setLat(response.data[0].lat)
            setCity(response.data[0].name)
        }).catch((error) => {
            alert('Pais ou cidade não encontrados')
            console.log(error)
        })
    }

    return (
        <div>
            <div className='ml-16'>
                <div className='grid grid-cols-1'>
                    <input type="text" onChange={handleChangeCountry} placeholder='Sigla do seu País' className=' mb-6 bg-gray-100 border focus:outline-none border-gray-300 text-gray-900 w-48 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    <input type="text" onChange={handleChangeCity} placeholder='Cidade' className='mb-6 bg-gray-100 border border-gray-300 focus:outline-none text-gray-900 w-48 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    <button onClick={getGeoLocal} className='text-white w-56 relative left-52 bottom-24 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 duration-300'>Enviar</button>
                </div>
                <div>
                    <p className='mb-4 text-black-800 text-2xl'>País: {country}</p>
                    <p className='mb-4 text-black-800 text-2xl'>Cidade: {city}</p>
                    <p className='mb-4 text-black-800 text-2xl'>Estado: {region}</p>
                </div>
            </div>
        </div>
    )
}

export default Header