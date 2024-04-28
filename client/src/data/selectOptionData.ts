export const filterOptions = [
  { id: 'recent', label: '최근 작성 순' },
  { id: 'low_price', label: '가격 낮은 순' },
  { id: 'high_price', label: '가격 높은 순' },
  { id: 'low_rating', label: '평점 낮은 순' },
  { id: 'high_rating', label: '평점 높은 순' },
];

export const wineTypeOptions = [
  { id: 1, type: 'red', label: '레드 와인' },
  { id: 2, type: 'white', label: '화이트 와인' },
  { id: 3, type: 'rose', label: '로제 와인' },
  { id: 4, type: 'white', label: '스파클링 와인' },
  { id: 5, type: 'rose', label: '로제 스파클링 와인' },
  { id: 6, type: 'red', label: '디저트 와인 (Red)' },
  { id: 7, type: 'white', label: '디저트 와인 (White)' },
  { id: 8, type: 'red', label: '주정강화 와인 (Red)' },
  { id: 9, type: 'white', label: '주정강화 와인 (White)' },
];

export const vintageOptions = Array.from(
  { length: 2025 - 1980 },
  (_, index) => {
    const year = 2024 - index;
    return { id: year, year: year };
  }
);

export const getTypeFromId = (id: number): string => {
  const wineType = wineTypeOptions.find((option) => option.id === id)!;
  return wineType.type;
};

export const getLabelFromId = (id: number): string => {
  const wineType = wineTypeOptions.find((option) => option.id === id)!;
  return wineType.label;
};
