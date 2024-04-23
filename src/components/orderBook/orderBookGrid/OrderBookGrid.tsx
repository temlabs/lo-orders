"use client";
import { useContext, useState } from "react";
import { OrderBook } from "../OrderBook";
import { OrderBookContainer } from "./OrderBookContainer";
import { nanoid } from "nanoid";
import { GridItem, OrderBookPosition } from "./orderBookGridTypes";
import { PlusIcon } from "@/components/icons/PlusIcon";
import { SearchModal } from "@/components/searchModal/SearchModal";
import { ModalContext } from "@/ModalContext";
import { useOrderData } from "../useOrderData";

export function OrderBookGrid() {
  const orderData = useOrderData();
  const [orderBooks, setOrderBooks] = useState<Array<GridItem>>([
    { id: nanoid() },
  ]);

  const setModal = useContext(ModalContext);

  const addNew = (position: OrderBookPosition, id: string) => {
    const orderBookIndex = orderBooks.findIndex((ob) => ob.id === id);
    if (position === "right") {
      setOrderBooks((ob) => {
        const newOb = [...ob];
        newOb.splice(orderBookIndex + 1, 0, { id: nanoid() });
        return newOb;
      });
    } else if (position === "left") {
      setOrderBooks((ob) => {
        const newOb = [...ob];
        newOb.splice(orderBookIndex, 0, { id: nanoid() });
        return newOb;
      });
    }
  };

  const remove = (id: string) => {
    if (orderBooks.length === 1) {
      setOrderBooks((ob) => [{ id: ob[0].id }]);
      return;
    }
    const orderBookIndex = orderBooks.findIndex((ob) => ob.id === id);
    setOrderBooks((ob) => {
      const newOb = [...ob];
      newOb.splice(orderBookIndex, 1);
      return newOb;
    });
  };

  const openModal = (id: string) => {
    setModal(
      <SearchModal
        data={orderData}
        onClose={() => setModal()}
        onSelect={(coinExchangePair) => {
          setOrderBooks((ob) => {
            const orderBookIndex = orderBooks.findIndex((ob) => ob.id === id);
            const newOb = [...ob];
            const newItem = { ...newOb[orderBookIndex], coinExchangePair };
            newOb.splice(orderBookIndex, 1, newItem);
            // console.debug(newOb[0]);
            return newOb;
          });
          setModal();
        }}
      />
    );
  };

  return (
    <>
      <div className="w-full flex flex-row flex-wrap gap-2 ">
        {orderBooks.map((ob, i) => (
          <div key={ob.id} className="flex flex-row gap-2 ">
            <OrderBookContainer
              key={ob.id}
              id={ob.id}
              onAddNew={addNew}
              onRemove={remove}
            >
              {!!ob.coinExchangePair?.coin && !!ob.coinExchangePair.exchange ? (
                <OrderBook
                  onOpenModal={() => openModal(ob.id)}
                  coinExchangePair={ob.coinExchangePair}
                  data={orderData.get(
                    `${ob.coinExchangePair.coin}${ob.coinExchangePair.exchange}`
                  )}
                />
              ) : (
                <div
                  className="flex flex-col gap-4 justify-center items-center w-full h-full bg-neutral-100 p-4 cursor-pointer"
                  onClick={() => openModal(ob.id)}
                >
                  <PlusIcon />
                  <p className="text-neutral-500 text-sm text-center">
                    Click to view a new currency pair
                  </p>
                </div>
              )}
            </OrderBookContainer>
            <button
              onMouseUp={() => addNew("right", ob.id)}
              className="w-2 h-auto bg-neutral-0 hover:bg-gray-300 cursor-pointer transition-colors"
            />
          </div>
        ))}
      </div>
    </>
  );
}
