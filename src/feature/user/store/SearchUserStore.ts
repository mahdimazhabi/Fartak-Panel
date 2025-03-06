import { create } from "zustand";

interface DataSearchestore {
  SearchWord: string;
  setSearchWord: (Word: string) => void;
}

export const useSearchStore = create<DataSearchestore>()((set) => ({
  SearchWord: "",
  setSearchWord: (Word) => set(() => ({ SearchWord: Word })),
}));
