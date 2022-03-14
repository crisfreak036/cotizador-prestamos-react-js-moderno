import React, { useState, Fragment } from 'react';
import LoanInfo from './LoanInfo';
import Message from './Message';
import { calculateFee } from '../helper';
import Spinner from './Spinner';

const Form = ( props ) => {

    const {loan, saveLoan, deadLineValue, saveDeadLine, totalPay, saveTotalPay, monthlyPay, saveMonthlyPay} = props;

    const [errorState, saveErrorState ] = useState(false);
    const [loading, saveLoadingState ] = useState(false);

    const readLoan = (e) => {
        saveLoan(parseInt(e.target.value));
    }

    const readDeadLine = (e) => {
        saveDeadLine(parseInt(e.target.value));
    }

    const validateInfo = (e) => {
        e.preventDefault();
        // console.log("Calculando Cuota");

        // Validación de los datos
        if( loan === 0 || deadLineValue === "" || isNaN(deadLineValue) || isNaN(loan) ) {
            // Muestra un mensaje de error
            saveErrorState(true);
            return;
        }
        // Quita el mensaje de error
        saveErrorState(false);

        // Muestra el Spinner
        saveLoadingState(true);

        // Luego de 2 segundos se realiza el calculo
        setTimeout(() => {
            // Calculo de la cuota
            const [interest, monthlyFee] = calculateFee( loan, deadLineValue );
            saveTotalPay(( loan + interest ));
            saveMonthlyPay(monthlyFee);

            // Quita el Spinner
            saveLoadingState(false)
        }, 2000);

    }

    // Carga condicional de componentes
    let variableComponent;

    if(loading){
        variableComponent = <Spinner/>
    } else if(totalPay === 0) {
        variableComponent = <Message/>;
    } else {
        variableComponent = <LoanInfo 
                                loan={loan}
                                deadLineValue={deadLineValue}
                                monthlyPay={monthlyPay}
                                totalPay={totalPay}
                            />
    }

    return (
        <Fragment>
            <div className='container'>
                <form 
                    onSubmit={ validateInfo }>
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
                { variableComponent } 
                { (errorState) ? <p className="error">Todos los campos son obligatorios</p>: null }
            </div>

        </Fragment>
     );
}
 
export default Form;