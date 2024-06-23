import { StateCreator } from "zustand";

type UserState = {
  userName: string;
  fullName: string;
  age: number;
  address: string;
};

type UserAction = {
  setAddress: (address: string) => void;
};

export type UserSlice = UserState & UserAction;

// creating slice

export const createUserSlice: StateCreator<UserSlice, [['zustand/immer', never]], [], UserSlice> = (
  set
) => ({
  address: "",
  age: 0,
  userName: "",
  fullName: "",
  setAddress: (address) => set((state) => {state.address = address}),
});
