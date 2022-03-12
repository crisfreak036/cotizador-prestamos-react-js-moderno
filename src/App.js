import React, { Fragment, useState } from "react";
import Header from "./components/Header"
import Form from "./components/Form"

function App() {

      // Definir el State
      const [loan, saveLoad] = useState(0);
      const [deadLineValue, saveDeadLine] = useState("");

  return (
    <Fragment>
      {/* Cada componente <Header /> es un elemento que se muestra en el HTML */}
      <Header
        titulo="Cotizador de Prestamos"
      />
      <Form
        loan={loan}
        saveLoad={saveLoad}
        deadLineValue={deadLineValue}
        saveDeadLine={saveDeadLine}

      />
    </Fragment>
  );
}

export default App;
