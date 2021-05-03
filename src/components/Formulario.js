import React, { useState } from 'react';
import shortid from 'shortid'
import { Error } from './Error';

export const Formulario = ({setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        if( cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true);
            return;
        }

        const gasto = {
            nombre, 
            cantidad, 
            id: shortid.generate()
        }
        setGasto(gasto);
        setCrearGasto(true);

        
        setNombre('');
        setCantidad(0);
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            { error ? <Error msg='Datos incorrectos'/> : null } 

            <div className="campo">
                <label>Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder='Ej. Transporte'
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder='Ej. 300'
                    value={cantidad}
                    onChange={e=>setCantidad(parseInt(e.target.value))}
                />
            </div>

            <input 
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gasto'
            />
        </form>
    )
}
