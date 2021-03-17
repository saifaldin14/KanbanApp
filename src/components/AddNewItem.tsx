import React from "react";
import { AddItemButton } from "../styles";

interface AddNewItemProps {
  onAdd(text: string): void; // Callback function called when we click the create item button
  toggleButtonText: string;
  dark?: boolean;
}
const AddNewItem = () => {
  return <div></div>;
};

export default AddNewItem;
