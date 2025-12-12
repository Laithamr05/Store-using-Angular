import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order: any;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.order = this.cartService.getLastOrder();
    if (!this.order) this.router.navigate(['/']);
  }
}
