import { useState } from 'react'

import Header from './components/Header'
import Button from './components/Button'

import { formatearDinero } from './helpers/index.js'

function App() {

  const [ cantidad, setCantidad ] = useState(10000)
  
  const MIN = 0
  const MAX = 20000
  const STEP = 100

  const handleChange = (e) => {
    setCantidad(Number(e.target.value))
  }

  const handleDecremento = () => {
    const valor = cantidad - STEP
    if (valor < MIN) return alert('Cantidad no valida') 
    setCantidad(valor)
  }

  const handleIncremento = () => {
    const valor = cantidad + STEP
    if (valor > MAX) return alert('Cantidad no valida') 
    setCantidad(valor)
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>

      <div
        className='flex justify-between my-6'
      >
        <Button
          textContent='-'
          type='button'
          handle={handleDecremento}
        />
        <Button
          textContent='+'
          type='button'
          handle={handleIncremento}
        />
      </div>
      
      <input 
        type="range" 
        name="" 
        id="" 
        className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600 mt-5'
        value={cantidad}
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
      />

      <p
        className='text-center my-10 text-5xl font-extrabold text-indigo-600'
      >
        {formatearDinero(cantidad)}
      </p>

    </div>
  )
}

export default App
