import { useState, Fragment } from "react";
import componentsImg from "./assets/components.png";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      {/* Fragment can also be used as: <> </>, yep that's it. */}
    </Fragment>
  );
}

export default App;
