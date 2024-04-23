"use client";

import { ReactNode } from "react";
import { OrderBookPosition } from "./orderBookGridTypes";
import { CloseIcon } from "@/components/icons/CloseIcon";

interface Props {
  id: string;
  children: ReactNode;
  onAddNew: (position: OrderBookPosition, id: string) => void;
  onRemove: (id: string) => void;
}

export function OrderBookContainer({
  children,
  onAddNew,
  onRemove,
  id,
}: Props) {
  return (
    <div className="w-fit">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-end">
          <CloseIcon
            color="black"
            onClick={() => onRemove(id)}
            className="cursor-pointer"
          />
        </div>
        <div>
          {/* <button
          onMouseUp={() => onAddNew("left", id)}
          className="w-2 h-auto bg-neutral-0 hover:bg-blue-600 cursor-pointer transition-colors"
        /> */}
          {children}
          {/* <button
          onMouseUp={() => onAddNew("right", id)}
          className="w-2 h-auto bg-neutral-0 hover:bg-blue-600 cursor-pointer transition-colors"
        /> */}
        </div>
      </div>
    </div>
  );
}
