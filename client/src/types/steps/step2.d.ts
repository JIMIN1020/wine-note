export type ColorType = 'white' | 'red' | 'rose';

export interface WineColorType {
  id: number;
  colorName: string;
  code: string;
}

export type WineColorDataType = {
  white: WineColor[];
  red: WineColor[];
  rose: WineColor[];
};

export interface WineColorIntensityType {
  id: number;
  name: string;
  opacity: number;
}
