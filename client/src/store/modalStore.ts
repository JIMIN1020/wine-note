import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Store {
  openWineModal: boolean;
  setOpenWineModal: (value: boolean) => void;
}

const useModalStore = create<Store>()(
  devtools(
    (set) => ({
      openWineModal: false,
      setOpenWineModal: (value: boolean) => {
        set(() => ({
          openWineModal: value,
        }));
      },
    }),
    {
      name: 'ModalStore',
    }
  )
);

export default useModalStore;
