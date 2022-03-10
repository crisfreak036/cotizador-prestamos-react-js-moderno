import React, { Fragment } from "react";
import Header from "./components/Header"

function App() {
  return (
    <Fragment>
      {/* Cada componente <Header /> es un elemento que se muestra en el HTML */}
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
    </Fragment>
  );
}

export default App;
