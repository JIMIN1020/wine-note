export interface LoginReq {
  email: string;
  password: string;
}

export interface JoinReq {
  nickname: string;
  email: string;
  password: string;
}

export interface Grape {
  name: string;
  percent: number;
}

export interface GetWinesParams {
  category?: number;
  name?: string;
  page?: number;
  limit?: number;
}

export interface AddWineNoteReq {
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
  };
}
