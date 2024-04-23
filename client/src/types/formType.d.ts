/* ----- step 1 ----- */
export interface GrapeType {
  name: string;
  percent: number;
}

/* ----- step 2----- */
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

/* ----- step 3 ----- */
export interface AromaIntensityType {
  id: number;
  type: string;
  desc: string;
}

/* ----- step 4 ----- */
export interface CharacteristicType {
  body: number;
  sweetness: number;
  tannin: number;
  acidity: number;
}

export interface RangeInputDataType {
  id: string;
  left: string;
  right: string;
}

/* ----- Form ----- */
export interface TastingFormType {
  step1: {
    wineImg: string | null;
    wineLink: string;
    wineName: string;
    wineType: number;
    price: number;
    country: string;
    region: string;
    grapes: GrapeType[];
  };
  step2: {
    color: string;
    colorIntensity: string;
  };
  step3: {
    aroma: string;
    aromaIntensity: string;
  };
  step4: {
    characteristics: CharacteristicType;
    flavor: string;
  };
  step5: {
    rating: number;
    conclusion: string;
  };
}
