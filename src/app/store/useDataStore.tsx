import { create } from "zustand";

interface DataStore {
  coinExchangePairs: Array<{ key: string; coin: string; exchange: string }>;
}

export const useDataStore = create<DataStore>((set) => ({
  coinExchangePairs: [],
}));
