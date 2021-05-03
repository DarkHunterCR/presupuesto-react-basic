import React from 'react'

export const Gasto = ({gasto}) => (
    <li className='gastos'>
        <p>
            {gasto.nombre}

            <span className='gasto'>$ {gasto.cantidad} </span>
        </p>
    </li>
)
