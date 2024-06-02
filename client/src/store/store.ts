import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { WineListItem, WineReviewRes } from '../types/api/response';

interface Store {
  selectedWine: WineReviewRes | null;
  setSelectedWine: (data: WineReviewRes | null) => void;
  wineList: WineListItem[] | null;
  setWineList: (data: WineListItem[]) => void;
}

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
        wineList: null,
        setWineList: (data: WineListItem[]) => {
          set(() => ({
            wineList: data,
          }));
        },
        selectedWine: null,
        setSelectedWine: (data: WineReviewRes | null) => {
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
