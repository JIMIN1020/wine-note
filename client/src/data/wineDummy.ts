export interface WineDataType {
  id: string;
  name: string;
  img?: string;
  country: string;
  region: string;
  price: string;
  vintage?: string;
  rating: number;
}

export const wineDummy: WineDataType[] = [
  {
    id: '1',
    name: 'Rombauer Vineyards Chardonnay Proprietor Selection 2022',
    country: 'United States',
    region: 'California',
    price: '127,000',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Rombauer Vineyards Chardonnay Proprietor Selection 2022',
    country: 'United States',
    region: 'California',
    price: '127,000',
    rating: 4.5,
  },
  {
    id: '3',
    name: 'Rombauer Vineyards Chardonnay Proprietor Selection 2022',
    country: 'United States',
    region: 'California',
    price: '127,000',
    rating: 4.5,
  },
  {
    id: '4',
    name: 'Rombauer Vineyards Chardonnay Proprietor Selection 2022',
    country: 'United States',
    region: 'California',
    price: '127,000',
    rating: 4.5,
  },
];
