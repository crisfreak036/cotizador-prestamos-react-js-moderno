import React, { Fragment, useState } from "react";
import Header from "./components/Header"
import Form from "./components/Form"

function App() {

      // Definir el State
      const [loan, saveLoad] = useState(0);
      const [deadLineValue, saveDeadLine] = useState("");
      const [totalPay, saveTotalPay] = useState(0);
      const [monthlyPay, saveMonthlyPay] = useState(0);

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
        totalPay={totalPay}
        saveTotalPay={saveTotalPay}
        monthlyPay={monthlyPay}
        saveMonthlyPay={saveMonthlyPay}
      />
    </Fragment>
  );
}

export default App;
