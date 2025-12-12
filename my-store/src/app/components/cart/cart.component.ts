import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];
  total = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.items.reduce((sum, item) => sum + (item.price || 0), 0);
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
    this.items = this.cartService.getItems();
    this.calculateTotal();
    alert('Item removed from cart');
  }

  clear(): void {
    this.cartService.clearCart();
    this.items = [];
    this.total = 0;
    alert('Cart cleared');
  }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
