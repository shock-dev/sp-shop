import { Sneaker } from '../resources/sneakers';

export const countById = (items: Sneaker[], id: Sneaker['id']) =>
  items.reduce((a, c) => (c.id === id ? ++a : a), 0);
