import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: any[] = [];
  private lastOrder: any = null;

  addToCart(product: any): void {
    this.items.push(product);
  }

  getItems(): any[] {
    return this.items;
  }

  removeItem(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  clearCart(): void {
    this.items = [];
  }

  setLastOrder(order: any): void {
    this.lastOrder = order;
  }

  getLastOrder(): any {
    return this.lastOrder;
  }
}
