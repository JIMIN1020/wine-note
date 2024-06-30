export interface WineStatRes {
  totalCount: number;
  averagePrice: number;
  averageTerm: number;
}

export interface Ratings {
  [key: string]: number;
}

export interface RatingStatRes {
  minRating: number;
  maxRating: number;
  avgRating: number;
  ratings: Ratings;
}

export interface TypeStatRes {
  [key: string]: number;
}

export interface CountryStatRes {
  [key: string]: number;
}
