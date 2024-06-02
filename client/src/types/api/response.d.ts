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

export interface WineListItem {
  wine_id: number;
  name: string;
  country: string;
  region: string;
  img: string;
  vintage: number;
  rating: number;
}

export interface GetAllWineRes extends CommonRes {
  result: WineListItem[];
}

export interface WineReviewRes {
  wine: {
    name: string;
    country: string;
    region: string;
    price: number;
    url: string;
    img: string | null;
    vintage: number;
    type: number;
    grapes: Grape[];
  };
  review: {
    id: number;
    wine_id: number;
    color: string;
    color_intensity: string;
    aroma: string;
    aroma_intensity: string;
    flavor: string;
    sweetness: number;
    acidity: number;
    tannin: number;
    body: number;
    rating: number;
    conclusion: string;
    created_at: string;
  };
}

export interface GetWineDetailRes extends CommonRes {
  result: WineReviewRes;
}
