export type ColorType = 'white' | 'red' | 'rose';

export interface WineColor {
  id: number;
  colorName: string;
  code: string;
}

export type WineColorType = {
  white: WineColor[];
  red: WineColor[];
  rose: WineColor[];
};

export interface WineColorIntensity {
  id: number;
  name: string;
  opacity: number;
}
