import React, { useRef } from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { useAppState } from "../AppStateContext";
import { useItemDrag } from "../hooks/useItemDrag";
import AddNewItem from "./AddNewItem";
import Card from "./Card";

interface ColumnProps {
  text: string;
  index: number;
  id: number;
}
const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", id, index, text });
  drag(ref);

  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
