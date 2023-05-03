export interface Sneaker {
  id: number;
  title: string;
  price: number;
  url: string;
}

export const mock: Sneaker[] = [
  {
    id: 1,
    title: 'New Balance 574 Vintage Brights',
    price: 650,
    url: '/img/sneakers/1.png',
  },
  {
    id: 2,
    title: 'New Balance Made in UK 920 Chinese New Year',
    price: 1200,
    url: '/img/sneakers/2.png',
  },
  {
    id: 3,
    title: 'New Balance 373 Modern Classics',
    price: 800,
    url: '/img/sneakers/3.png',
  },
  {
    id: 4,
    title: 'New Balance Made in UK 670 Chinese New Year',
    price: 780,
    url: '/img/sneakers/4.png',
  },
  {
    id: 5,
    title: 'New Balance X-Racer Utility',
    price: 1000,
    url: '/img/sneakers/5.png',
  },
  {
    id: 6,
    title: 'New Balance 5740 Think Colorfully',
    price: 940,
    url: '/img/sneakers/6.png',
  },
];
