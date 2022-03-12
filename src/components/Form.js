import React, { useState, Fragment } from 'react';

const Form = ({loan, saveLoad, deadLineValue, saveDeadLine}) => {

    const [errorState, saveErrorState ] = useState(false);

    const readLoan = (e) => {
        saveLoad(parseInt(e.target.value));
    }

    const readDeadLine = (e) => {
        saveDeadLine(parseInt(e.target.value));
    }

    const calculatefee = (e) => {
        e.preventDefault();
        // console.log("Calculando Cuota");

        // Validación de los datos
        if( loan === 0 || deadLineValue === "" || isNaN(deadLineValue) || isNaN(loan) ) {
            saveErrorState(true);
            return;
        }
        saveErrorState(false)

        // Calculo de la cuota

    
        // Limpiar los inputs
    }

    // console.log(`Cantidad: ${loan}`);
    // console.log(`Plazo para Pagar: ${deadLineValue}`)

    return (
        <Fragment>
            <div className='container'>
                <form 
                    onSubmit={ calculatefee }>
                    <div className='row'>
                        <div>
                            <label htmlFor="loan-amount">
                                Cantidad Préstamo
                                </label>
                                <input
                                    id='loan-amount' 
                                    name='loan-amount'
                                    type="number"
                                    className="u-full-width"
                                    placeholder='Ejemplo: 3000'
                                    onChange={readLoan}
                                />
                        </div>
                        <div>
                            <label htmlFor="deadline">
                                Plazo para Pagar
                            </label>
                            <select 
                                name="deadline" 
                                id="deadline"
                                className="u-full-width"
                                onChange={readDeadLine}>
                                    <option value="">Seleccionar</option>
                                    <option value="3">3 Meses</option>
                                    <option value="6">6 Meses</option>
                                    <option value="9">9 Meses</option>
                                    <option value="12">12 Meses</option>
                                    <option value="24">24 Meses</option>
                            </select>
                        </div>
                        <div>
                            <input 
                                type="submit" 
                                value="Calcular"
                                className="button-primary u-full-width"
                            />
                        </div>
                    </div>
                </form>
            { (errorState) ? <p className="error">Todos los campos son obligatorios</p>: null } 
            </div>

        </Fragment>
     );
}
 
export default Form;