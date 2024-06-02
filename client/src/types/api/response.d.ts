export interface CommonRes {
  isSuccess: boolean;
  message?: string;
}

export interface EmailCheckRes extends CommonRes {
  result: boolean;
}

export interface WineSearchResult {
  name: string;
  link: string;
  thumb: string;
  country: string;
  region: string;
  average_rating: number;
  ratings: number;
  price: number;
}

export interface WineSearchRes extends CommonRes {
  result: WineSearchResult[];
}
