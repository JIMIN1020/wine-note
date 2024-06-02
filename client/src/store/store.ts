import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { WineReviewRes } from '../types/api/response';

interface Store {
  selectedWine: WineReviewRes | null;
  setSelectedWine: (data: WineReviewRes | null) => void;
}

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
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
