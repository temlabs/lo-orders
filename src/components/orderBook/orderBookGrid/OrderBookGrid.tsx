"use client";
import { useState } from "react";
import { OrderBook } from "../OrderBook";
import { OrderBookContainer } from "./OrderBookContainer";
import { nanoid } from "nanoid";
import { OrderBookPosition } from "./orderBookGridTypes";

export function OrderBookGrid() {
  const [orderBooks, setOrderBooks] = useState([nanoid()]);

  const addNew = (position: OrderBookPosition, id: string) => {
    const orderBookIndex = orderBooks.findIndex((obId) => obId === id);
    if (position === "right") {
      setOrderBooks((ob) => {
        const newOb = [...ob];
        newOb.splice(orderBookIndex + 1, 0, nanoid());
        return newOb;
      });
    } else if (position === "left") {
      setOrderBooks((ob) => {
        const newOb = [...ob];
        newOb.splice(orderBookIndex, 0, nanoid());
        return newOb;
      });
    }
  };

  const remove = (id: string) => {
    const orderBookIndex = orderBooks.findIndex((obId) => obId === id);
    setOrderBooks((ob) => {
      const newOb = [...ob];
      newOb.splice(orderBookIndex, 1);
      return newOb;
    });
  };
  console.debug(orderBooks);

  return (
    <div className="w-full flex flex-row flex-wrap gap-2 ">
      {orderBooks.map((ob, i) => (
        <div key={ob} className="flex flex-row gap-2">
          {/* {i === 0 ? (
            <button
              onMouseUp={() => addNew("left", ob)}
              className="w-2 h-auto bg-neutral-0 hover:bg-blue-600 cursor-pointer transition-colors"
            />
          ) : (
            <></>
          )} */}
          <OrderBookContainer
            key={ob}
            id={ob}
            onAddNew={addNew}
            onRemove={remove}
          >
            <OrderBook />
          </OrderBookContainer>
          <button
            onMouseUp={() => addNew("right", ob)}
            className="w-2 h-auto bg-neutral-0 hover:bg-blue-600 cursor-pointer transition-colors"
          />
        </div>
      ))}
    </div>
  );
}
