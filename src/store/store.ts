import { Store } from "@/types/store";
import { create } from "zustand";
import { createUserSlice } from "./userSlice";
import { createCartSlice } from "./cartSlice";
import { immer } from "zustand/middleware/immer";

export const useStore = create<Store>()(
  immer((...a) => ({
    ...createUserSlice(...a),
    ...createCartSlice(...a),
  }))
);
