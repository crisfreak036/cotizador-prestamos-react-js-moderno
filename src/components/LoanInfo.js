import React, { useState, Fragment } from 'react';

const LoanInfo = (props) => {
    const { loan, deadLineValue, monthlyPay, totalPay } = props;

    return ( 
        <div className='u-full-width resultado'>
            <h2>Resumen</h2>
            <p>La cantidad Solicitada es: $ {loan}</p>
            <p>A pagar en: {deadLineValue} Meses</p>
            <p>El pago mensual es de: $ {monthlyPay}</p>
            <p>Total a Pagar: $ {totalPay}</p>
        </div>
     );
}
 
export default LoanInfo;