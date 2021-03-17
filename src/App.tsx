import React from "react";
import logo from "./logo.svg";
import { AppContainer } from "./styles";
import Card from "./components/Card";
import Column from "./components/Column";

import "./App.css";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>

      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>

      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
    </AppContainer>
  );
}

export default App;
