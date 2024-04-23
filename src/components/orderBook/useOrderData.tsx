import { useEffect, useMemo, useState } from "react";
import {
  OrderData,
  CoinExchangePair,
  OrderDataMapValue,
} from "./orderDataTypes";
import { create } from "zustand";

export function useOrderData() {
  const [orderBookData, setOrderBookData] = useState<Map<string, OrderData>>(
    new Map()
  );

  useEffect(() => {
    const ws = new WebSocket("wss://mock.lo.tech:8443/ws/orderbook");
    ws.addEventListener("message", (event) => {
      const data = JSON.parse(event.data) as OrderData;
      const { coin, exchange, asks, bids, timestamp }: OrderData = data;
      const mapKey = `${coin}${exchange}`;

      const value: OrderDataMapValue = { asks, bids, timestamp };

      setOrderBookData((obd) => {
        // if (!obd.has(mapKey)) {
        return new Map(obd).set(mapKey, data);
        // } else {
        //   return obd;
        // }
      });
    });
    return () => ws.close();
  }, []);

  return orderBookData;
}

//  return new Map(obd).set(mapKey, data)}
