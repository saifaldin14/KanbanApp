import React from "react";

interface Item {
  id: string;
}

export const findItemIndexById = <T extends Item>(items: T[], id: string) => {};
