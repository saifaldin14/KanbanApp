import React, { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles";

interface NewItemFormProps {
  onAdd(text: string): void; // callback passed through AddNewItemProps
}

const NewItemForm = (props: NewItemFormProps) => {
  const [text, setText] = useState("");
  const { onAdd } = props;

  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)} />

      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
