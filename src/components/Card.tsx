import React, { useRef } from "react";
import { CardContainer } from "../styles";
import { useItemDrag } from "../hooks/useItemDrag";
import { useDrop } from "react-dnd";
import { CardDragItem } from "../DragItem";
import { useAppState } from "../AppStateContext";
import { isHidden } from "../utils/isHidden";

interface CardProps {
  text: string;
  index: number;
  id: string;
  columnId: string;
  isPreview?: boolean;
}

export const Card = ({ text }: CardProps) => {
  const [, drop] = useDrop({
    accept: "CARD",
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } });
      item.index = hoverIndex;
    },
  });
  return <CardContainer>{text}</CardContainer>;
};
