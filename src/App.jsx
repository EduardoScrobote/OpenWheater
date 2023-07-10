import { useState } from 'react'

import Header from './components/Header'
import Daily from './components/Daily'
import Week from './components/Week'

import './App.css'

function App() {

  const [long, setLong] = useState(null)
  const [lat, setLat] = useState(null)

  return (
    <div>
      <div className='bg-custom-image place-itens-center p-4'>
      <div>
        <div className='grid grid-flow-col place-content-center'>
          <div className='mt-12 place-content-center grid grid-flow-col mb-16'>
      <h1 className='text-4xl'>Wheater API -Informações climaticas não importa onde esteja!</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/3104/3104619.png" alt="" className='w-16 ml-8'/> 
          </div>
        </div>
        <div className='place-content-center'>
      <Header setLong={setLong} setLat={setLat}/>
        </div>
      </div>
      <div className='grid grid-cols-2 place-content-center'>
      <Daily long={long} lat={lat}/>
      <Week longi={long} lati={lat}/>
      </div>
      </div>
    </div>
  )
}

export default App