import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  name = '';
  address = '';
  creditCard = '';

  nameError = false;
  addressError = false;
  cardError = false;

  total = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    const items = this.cartService.getItems();
    this.total = items.reduce((sum, item) => sum + (item.price || 0), 0);
  }

  validateName(): void {
    this.nameError = this.name.trim().length === 0;
  }

  validateAddress(): void {
    this.addressError = this.address.trim().length === 0;
  }

  validateCard(): void {
    const is16Digits = /^\d{16}$/.test(this.creditCard);
    this.cardError = !is16Digits;
  }

  onSubmit(): void {
    this.validateName();
    this.validateAddress();
    this.validateCard();

    if (this.nameError || this.addressError || this.cardError) return;

    const order = { name: this.name, address: this.address, total: this.total };

    this.cartService.setLastOrder(order);
    this.cartService.clearCart();
    this.router.navigate(['/confirmation']);
  }
}
