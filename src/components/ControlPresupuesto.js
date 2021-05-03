import React from 'react'
import { revisarPresupuesto } from '../helpers/Helpers'

export const ControlPresupuesto = ({presupuesto, restante}) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={ revisarPresupuesto(presupuesto, restante) }>
                Restante: $ {restante}
            </div>
        </>
    )
}
