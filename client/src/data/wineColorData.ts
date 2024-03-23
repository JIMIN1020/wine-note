import { WineColorIntensity, WineColorType } from '../types/wineColor';

export const wineColor: WineColorType = {
  white: [
    { id: 1, colorName: 'Green', code: '#dbf47c' },
    { id: 2, colorName: 'Lemon', code: '#f1f285' },
    { id: 3, colorName: 'Gold', code: '#fed600' },
    { id: 4, colorName: 'Amber', code: '#de7e0b' },
  ],
  red: [
    { id: 1, colorName: 'Purple', code: '#612a54' },
    { id: 2, colorName: 'Ruby', code: '#b0343c' },
    { id: 3, colorName: 'Garnet', code: '#70141c' },
    { id: 4, colorName: 'Tawny', code: '#a03424' },
  ],
  rose: [
    { id: 1, colorName: 'Pink', code: '#f89cac' },
    { id: 2, colorName: 'Salmon', code: '#e88c74' },
    { id: 3, colorName: 'Rose', code: '#e8847c' },
  ],
};

export const colorIntensity: WineColorIntensity[] = [
  { id: 1, name: 'Pale', opacity: 0.4 },
  { id: 2, name: 'Medium', opacity: 0.6 },
  { id: 3, name: 'Deep', opacity: 1 },
];
