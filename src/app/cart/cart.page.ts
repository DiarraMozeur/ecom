import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Key } from 'protractor';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
   selectedItems= [] ;
   efface = false;
   total = 0;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {} ;
    for(let obj of items){
      if(selected [obj.id]){
        selected[obj.id].count++;
      }else{
        selected[obj.id] = {...obj, count: 1};
      }
    }
    
    this.selectedItems = Object.keys(selected).map(Key => selected[Key])
    console.log('items:' ,this.selectedItems);
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }
  openHome() {
    this.router.navigate(['home'])
  }
  supprimer() {
    this.efface = true;
  }
  remove(no){
    //this.selectedItems = this.cartService.getProducts();
    //this.selectedItems. splice(no, 1); 
    let items = this.cartService.getCart();
    let selected = {} ;
    for(let obj of items){
      if(selected [obj.id]){
        selected[obj.id].splice();
      }
    }
  }

}
