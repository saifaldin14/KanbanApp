import React from "react";
import { AppContainer } from "./styles";
import { useAppState } from "./AppStateContext";
import Card from "./components/Card";
import Column from "./components/Column";
import AddNewItem from "./components/AddNewItem";

const App = () => {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}

      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
