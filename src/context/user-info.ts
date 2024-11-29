import { create } from "zustand";

interface UserState {
  logado: boolean;
  setLogado: (nextValue: boolean) => void;
}

const useUserStore = create<UserState>((set) => ({
  logado: false,
  setLogado: (nextValue) => set({ logado: nextValue }),
}));

export default useUserStore;
