import React, { Fragment } from 'react';

// function Header(props) {
function Header({titulo, descripcion}) {

    /* Entre la declaración de la función y el return
     se puede colocar código standard de JS */

    console.log(titulo, descripcion)
    // console.log(props)

    return(
        <Fragment>
            {/* Dentro de las llaves, lo que hay
            es código JS */}
            <h1>{ titulo }</h1>
            <p>{ descripcion }</p>
            {/* <h1>{ props.titulo }</h1> */}
            {/* <p>{ props.descripcion }</p> */}
        </Fragment>
    )
}

// const Header = ({ titulo, descripcion }) => ( 
//     <Fragment>
//         <h1>{ titulo }</h1>
//         <p>{ descripcion }</p>
//     </Fragment>
// );

export default Header;