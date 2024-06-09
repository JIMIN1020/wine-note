import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface Store {
  openWineModal: boolean;
  setOpenWineModal: (value: boolean) => void;
  selectedWine: number | null;
  setSelectedWine: (data: number | null) => void;
}

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
        openWineModal: false,
        setOpenWineModal: (value: boolean) => {
          set(() => ({
            openWineModal: value,
          }));
        },
        selectedWine: null,
        setSelectedWine: (data: number | null) => {
          set(() => ({
            selectedWine: data,
          }));
        },
      }),
      {
        name: 'store',
      }
    )
  )
);

export default useStore;
