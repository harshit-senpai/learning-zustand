import { create } from "zustand";
import { Button } from "./components/ui/button";

// stores in zustand are simply hooks
// zustand provides the set utility

const useStore = create<{
  count: number;
  inc: () => void;
  dec: () => void;
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

function Count() {
  const store = useStore();
  return <>{store.count}</>;
}

function App() {
  const store = useStore();
  return (
    <>
      <Button onClick={store.inc}>+</Button>
      <Count />
      <Button onClick={store.dec}>-</Button>
    </>
  );
}

export default App;
