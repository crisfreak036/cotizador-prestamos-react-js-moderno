import React, { Fragment } from "react";
import Header from "./components/Header"
import Form from "./components/Form"

function App() {
  return (
    <Fragment>
      {/* Cada componente <Header /> es un elemento que se muestra en el HTML */}
      <Header
        titulo="Cotizador de Prestamos"
      />
      <Form/>
    </Fragment>
  );
}

export default App;
