import React, { useState } from "react";
import { AddItemButton } from "../styles";
import NewItemForm from "./NewItemForm";

interface AddNewItemProps {
  onAdd(text: string): void; // Callback function called when we click the create item button
  toggleButtonText: string;
  dark?: boolean;
}
const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    // We show item creation form here
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;
