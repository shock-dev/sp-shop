import { makeAutoObservable } from 'mobx';
import { mock, Sneaker } from '../resources/sneakers';
import { getStorageItem, setStorageItem } from '../helpers/storage';

const CART = 'cart';

class CartStore {
  items: Sneaker[] = [...mock.slice(0, 2)];
  tax = 100;
  shopping = 150;

  constructor() {
    makeAutoObservable(this);

    const saved = getStorageItem(CART);

    if (saved) {
      this.items = saved;
    }
  }

  add(item: Sneaker) {
    this.items.push(item);
    setStorageItem(CART, this.items);
  }

  minus(id: Sneaker['id']) {
    if (this.items.length < 1) return;
    const idx = this.items.findLastIndex(i => i.id === id);
    this.items.splice(idx, 1);
    setStorageItem(CART, this.items);
  }

  delete(id: Sneaker['id']) {
    this.items = this.items.filter(i => i.id !== id);
    setStorageItem(CART, this.items);
  }

  get subtotal() {
    return this.items.reduce((a, c) => a + c.price, 0);
  }

  get total() {
    if (this.subtotal === 0) return 0;
    return this.subtotal + this.tax + this.shopping;
  }
}

export const cartStore = new CartStore();
