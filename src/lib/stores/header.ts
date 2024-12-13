import { create } from "zustand";

export interface HeaderStore {
  title: string;
  banner: string;
  setHeader: (title: string, banner: string) => void;
}

export const UseHeader = create<HeaderStore>((set) => ({
  title: "",
  banner: "",
  setHeader: (newTitle, newBanner) =>
    set({ banner: newBanner, title: newTitle }),
}));
