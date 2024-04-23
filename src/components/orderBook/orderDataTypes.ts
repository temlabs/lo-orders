export interface OrderData {
  timestamp: number;
  exchange: string;
  coin: string;
  bids: [number, number][];
  asks: [number, number][];
}

export type OrderDataMapKey = Pick<OrderData, "coin" | "exchange">;
export type OrderDataMapValue = Omit<OrderData, "coin" | "exchange">;
