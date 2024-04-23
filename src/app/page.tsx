"use client";

import { ModalContext } from "@/ModalContext";
import { OrderBook } from "@/components/orderBook/OrderBook";
import { OrderBookGrid } from "@/components/orderBook/orderBookGrid/OrderBookGrid";
import { OrderBookTable } from "@/components/orderBook/orderBookTable/OrderBookTable";
import { useOrderData } from "@/components/orderBook/useOrderData";
import { ReactNode, createContext, useState } from "react";

export default function Home() {
  const [modal, setModal] = useState<ReactNode>();

  return (
    <ModalContext.Provider value={setModal}>
      <>
        <main className="flex min-h-screen h-fit flex-col items-center justify-start gap-12 p-24 w-full bg-white">
          <h1 className="text-neutral-900 w-full text-left text-4xl font-bold">
            LO - Order Book
          </h1>
          <OrderBookGrid />
        </main>
        {!!modal ? modal : <></>}
      </>
    </ModalContext.Provider>
  );
}
