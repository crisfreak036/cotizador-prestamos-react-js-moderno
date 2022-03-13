export function calculateFee( loan, deadLineValue ) {
    /* 
        Interés según préstamo:
            * 0 -> 1000 = 25%
            * 1001 -> 5000 = 20%
            * 5001 -> 10000 = 15%
            * +10000 = 10% 
        
        Interés según plazo:
            * 3 Meses = 5%
            * 6 Meses = 10%
            * 12 Meses = 15%
            * 24 Meses = 20%
    */

    // Calcular el interés en base al monto
    let interestLoan = 0;

    if( loan <= 1000) {
        interestLoan = loan * 0.25;
    }

    if( loan > 1000 && loan <= 5000) {
        interestLoan = loan * 0.2;
    }

    if( loan > 5000 && loan <= 10000) {
        interestLoan = loan * 0.15;
    }

    if( loan > 10000) {
        interestLoan = loan * 0.1;
    }

    // Calcular el interes en base al tiempo
    let interestDeadLineValue = 0;
    switch (deadLineValue) {
        case 3:
            interestDeadLineValue = loan * 0.05;
            break;
        case 6:
            interestDeadLineValue = loan * 0.1;
            break;
        case 12:
            interestDeadLineValue = loan * 0.15;
            break;
        case 24:
            interestDeadLineValue = loan * 0.2;
            break;
        default:
            break;
    }

    // Calculo del interés total
    let interest = interestLoan + interestDeadLineValue;

    // Calculo de la cuota mensual
    let monthlyFee = (loan + interest)/deadLineValue;

    return [interest, monthlyFee];
}