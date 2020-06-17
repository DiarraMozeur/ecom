import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cart = [];
  items = [];
  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.5
  }
  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
  }
  addToCart(product) {
    this.cartService.addProduct(product);
  }
  openCart() {
    this.router.navigate(['cart'])
  }
  openContact() {
    this.router.navigate(['contact'])
  }
  openQuestion() {
    this.router.navigate(['question'])
  }


}
