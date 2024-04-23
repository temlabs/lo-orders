import { useEffect, useState } from "react";
import {
  OrderData,
  OrderDataMapKey,
  OrderDataMapValue,
} from "./orderDataTypes";

export function useOrderData() {
  const [orderBookData, setOrderBookData] = useState<
    Map<OrderDataMapKey, OrderDataMapValue>
  >(new Map());
  useEffect(() => {
    const ws = new WebSocket("ws address");
    ws.addEventListener("message", (event) => {
      const { coin, exchange, asks, bids, timestamp }: OrderData = event.data;
      const mapKey: OrderDataMapKey = { coin, exchange };
      const value: OrderDataMapValue = { asks, bids, timestamp };
      setOrderBookData((obd) => new Map(obd).set(mapKey, value));
    });
    return () => ws.close();
  }, []);

  return { orderBookData };
}
