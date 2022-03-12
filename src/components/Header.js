import React, { Fragment } from 'react';

function Header({titulo}) {

    /* Entre la declaración de la función y el return
     se puede colocar código standard de JS */

    return(
        <Fragment>
            {/* Dentro de las llaves, lo que hay
            es código JS */}
            <h1>{ titulo }</h1>
        </Fragment>
    )
}
export default Header;