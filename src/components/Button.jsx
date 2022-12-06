import React from 'react'

const Button = ({textContent, type, handle}) => {
    return (
        <button
            type={type}
            className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
            onClick={handle}
            >
            {textContent}
        </button>
    )
}

export default Button