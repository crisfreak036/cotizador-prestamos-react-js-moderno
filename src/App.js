import React, { Fragment } from "react";
import Header from "./components/Header"

function App() {
  return (
    <Fragment>
      {/* Cada componente <Header /> es un elemento que se muestra en el HTML */}
      <Header
        titulo="Cotizador de Prestamos"
        descripcion="Utiliza el formulario y obtén una cotización"
      />
    </Fragment>
  );
}

export default App;
