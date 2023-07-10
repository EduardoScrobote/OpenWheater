import { useState, useEffect } from 'react'
import axios from 'axios'

function Week({ longi, lati }) {

    const strLongi = String(longi);
    const strLati = String(lati);
    const [i, setI] = useState();
    const [temperatureMin, setTemperatureMin] = useState();
    const [temperatureMax, setTemperatureMax] = useState();
    const [feels, setFeelsLike] = useState();
    const [uvRay, setUvRay] = useState();
    const [clouds, setClouds] = useState();

    useEffect(() => {
        if (longi !== null && lati !== null && longi !== undefined && lati !== undefined) {
            getWeekWheather();
        };
    }, [longi, lati]);

    const getWeekWheather = async () => {
        await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${strLati}&lon=${strLongi}&units=metric&exclude=minutely,hourly,current,alerts&appid=0812aca61bfe2e569c8451f63f6b7765`).then((response) => {
            const dataDaily = response.data.daily
            setTemperatureMax(dataDaily[i].temp.max);
            setTemperatureMin(dataDaily[i].temp.min);
            setFeelsLike(dataDaily[i].feels_like.day);
            setUvRay(dataDaily[i].uvi);
            setClouds(dataDaily[i].clouds);
            }
        )
    };

    useEffect(() => {
        getWeekWheather()
    }, [i])

    const index = (e) => {
        switch (e.target.value) {
            case 'seg': setI(1);
                break;
            case 'ter': setI(2);
                break;
            case 'qua': setI(3);
                break;
            case 'qui': setI(4);
                break;
            case 'sex': setI(5);
                break;
            case 'sab': setI(6);
                break;
            case 'dom': setI(7);
                break;
            default:
                break;
        }
    }

    return (

        <div>
            <div className='bg-sky-600 w-96 rounded-xl h-96 mt-12 pt-2'>
                <div className='grid grid-flow-col'>
                    <h1 className='mb-2 mt-2 ml-6 font-bold text-3xl'>Previsão Semanal</h1>
                    <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="" className='w-14' />
                </div>
                <div className='grid grid-cols-8 gap-6 text-left mb-6 mt-6'>
                    <button value={'seg'} onClick={index} className='ml-2 mr-2 text-s rounded-lg bg-blue-700 p-2 w-12 text-center transition hover:bg-sky-700 duration-300 delay-300 hover:animate-bounce'>Seg</button>
                    <button value={'ter'} onClick={index} className='ml-2 mr-2 text-s rounded-lg bg-blue-700 p-2 w-12 text-center transition hover:bg-sky-700 duration-300 delay-300 hover:animate-bounce'>Ter</button>
                    <button value={'qua'} onClick={index} className='ml-2 mr-2 text-s rounded-lg bg-blue-700 p-2 w-12 text-center transition hover:bg-sky-700 duration-300 delay-300 hover:animate-bounce'>Qua</button>
                    <button value={'qui'} onClick={index} className='ml-2 mr-2 text-s rounded-lg bg-blue-700 p-2 w-12 text-center transition hover:bg-sky-700 duration-300 delay-300 hover:animate-bounce'>Qui</button>
                    <button value={'sex'} onClick={index} className='ml-2 mr-2 text-s rounded-lg bg-blue-700 p-2 w-12 text-center transition hover:bg-sky-700 duration-300 delay-300 hover:animate-bounce'>Sex</button>
                    <button value={'sab'} onClick={index} className='ml-2 mr-2 text-s rounded-lg bg-blue-700 p-2 w-12 text-center transition hover:bg-sky-700 duration-300 delay-300 hover:animate-bounce'>Sab</button>
                    <button value={'dom'} onClick={index} className='ml-2 mr-2 text-s rounded-lg bg-blue-700 p-2 w-12 text-center transition hover:bg-sky-700 duration-300 delay-300 hover:animate-bounce'>Dom</button>
                </div>
                <div className='ml-4'>
                    <p className='mb-4 text-black-400'>Temperatura-Max: {temperatureMax}</p>
                    <p className='mb-4 text-black-400'>Temperatura-Min: {temperatureMin}</p>
                    <p className='mb-4 text-black-400'>Sensação Termica: {feels}</p>
                    <p className='mb-4 text-black-400'>Raios UV: {uvRay}</p>
                    <p className='mb-4 text-black-400'>Nuvens: {clouds}%</p>
                </div>
            </div>
        </div>
    )
}

export default Week