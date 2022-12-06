import { useEffect, useState } from 'react'

import Header from './components/Header'
import Button from './components/Button'

import { formatearDinero, calcularTotalAPagar } from './helpers/index.js'

function App() {

  const [ cantidad, setCantidad ] = useState(10000)
  const [ plazoPagar, setPlazoPagar ] = useState(6)
  const [ total, setTotal ] = useState(0)
  const [ pagoMensual, setPagoMensual ] = useState(0)

  useEffect(() => {
    const resultadoTotalAPagar = calcularTotalAPagar(cantidad, plazoPagar)
    setTotal(resultadoTotalAPagar)

    const resultadoPagoMensual = resultadoTotalAPagar/plazoPagar
    setPagoMensual(resultadoPagoMensual)
  }, [cantidad, plazoPagar])
  
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

  const handleSelect = (e) => {
    setPlazoPagar(Number(e.target.value))
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

      <h2 
        className='text-2xl font-extrabold text-gray-500 text-center'
      >
        Elige un <span className='text-indigo-600'>Plazo</span> a pagar
      </h2>

      <select
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        value={plazoPagar}
        onChange={handleSelect}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>
      
      <div 
        className="my-5 space-y-3 bg-gray-50 p-5 shadow"
      >
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Resumen <span className='text-indigo-600'>de Pagos</span>
        </h2>

        <p 
          className="text-xl text-gray-500 text-center font-bold"
        >
          {plazoPagar} Meses
        </p>
        <p 
          className="text-xl text-gray-500 text-center font-bold"
        >
          Total a Pagar: {formatearDinero(total)}
        </p>
        <p 
          className="text-xl text-gray-500 text-center font-bold"
        >
          Pagos Mensuales: {formatearDinero(pagoMensual)}
        </p>
      </div>

    </div>
  )
}

export default App
