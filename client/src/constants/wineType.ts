interface WineType {
  type: string;
  label: string;
}

export const WINE_TYPE: {
  [key: number]: WineType;
} = {
  1: {
    type: 'red',
    label: '레드 와인',
  },
  2: {
    type: 'white',
    label: '화이트 와인',
  },
  3: {
    type: 'rose',
    label: '로제 와인',
  },
  4: {
    type: 'white',
    label: '스파클링 와인',
  },
  5: {
    type: 'rose',
    label: '로제 스파클링 와인',
  },
  6: {
    type: 'red',
    label: '디저트 와인 (Red)',
  },
  7: {
    type: 'white',
    label: '디저트 와인 (White)',
  },
  8: {
    type: 'red',
    label: '주정강화 와인 (Red)',
  },
  9: {
    type: 'white',
    label: '주정강화 와인 (White)',
  },
};
