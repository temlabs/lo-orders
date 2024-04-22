export interface OrderData {
  timestamp: number;
  exchange: string;
  coin: string;
  bids: [number, number][];
  asks: [number, number][];
}

export type OrderBookData = Array<OrderData>;
