import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Store {
  selectedWine: number | null;
  setSelectedWine: (data: number | null) => void;
}

const useWineStore = create<Store>()(
  devtools(
    (set) => ({
      selectedWine: null,
      setSelectedWine: (data: number | null) => {
        set(() => ({
          selectedWine: data,
        }));
      },
    }),
    {
      name: 'WineStore',
    }
  )
);

export default useWineStore;
