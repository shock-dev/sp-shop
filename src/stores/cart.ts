import { makeAutoObservable } from 'mobx';
import { Sneaker } from '../resources/sneakers';

class CartStore {
  items: Sneaker[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  add(item: Sneaker) {
    this.items.push(item);
  }

  minus(id: Sneaker['id']) {
    if (this.items.length < 1) return;
    const idx = this.items.findLastIndex(i => i.id === id);
    this.items.splice(idx, 1);
  }

  delete(id: Sneaker['id']) {
    this.items = this.items.filter(i => i.id !== id);
  }
}

export const cartStore = new CartStore();
