const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor);
}

const calcularTotalAPagar = (cantidad, plazoPagar) => {
    const interesPlazo = {
        "6": 1.1,
        "12": 1.2
    }

    if (cantidad < 5000) {
        const interes = interesPlazo[plazoPagar] || 1.3; 
        return cantidad * 1.5 * interes;
    }

    if (cantidad >= 5000 && cantidad < 10000) {
        const interes = interesPlazo[plazoPagar] || 1.3; 
        return cantidad * 1.4 * interes;
    }

    if (cantidad >= 10000 && cantidad < 15000) {
        const interes = interesPlazo[plazoPagar] || 1.3; 
        return cantidad * 1.3 * interes;
    }

    const interes = interesPlazo[plazoPagar] || 1.3; 
    return cantidad * 1.2 * interes;

}

export {
    formatearDinero,
    calcularTotalAPagar
}