import React from 'react';

const Form = () => {
    return (
        <div className='container'>
            <form>
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
                            />
                    </div>
                    <div>
                        <label htmlFor="deadline">
                            Plazo para Pagar
                        </label>
                        <select 
                            name="deadline" 
                            id="deadline"
                            className="u-full-width">
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
                            className="button-primary u-full-width" />
                    </div>
                </div>
            </form>
        </div> 
     );
}
 
export default Form;