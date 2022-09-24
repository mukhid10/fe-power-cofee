import create from "zustand";

const globalState = {
  cart: 0,
};

export const useStore = create((set) => ({
  ...globalState,
  dispatch: (state) => {
    set(state);
  },
}));
