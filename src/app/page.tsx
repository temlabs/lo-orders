"use client";

import { OrderBook } from "@/components/orderBook/OrderBook";
import { OrderBookTable } from "@/components/orderBook/orderBookTable/OrderBookTable";
import { useOrderData } from "@/components/orderBook/useOrderData";

export default function Home() {
  useOrderData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full bg-white">
      <OrderBook />
    </main>
  );
}
