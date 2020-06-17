import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
  {
    category: 'fruit',

    products: [
      { id: 1, name: 'Banane', price: '12', imgUrl: '../assets/img/Img/banane.jpg'},
      { id: 2, name: 'Mangue', price: '20', imgUrl: '../assets/img/Img/mangue.jpg'},
      { id: 3, name: 'Avocat', price: '18', imgUrl: '../assets/img/Img/Avocat.jpg'},
      { id: 4, name: 'Papaye', price: '11', imgUrl: '../assets/img/Img/papaye.jpg'},
      { id: 5, name: 'Canne a sucre', price: '23', imgUrl: '../assets/fruit/CanneAsucre.jpg'},
      { id: 6, name: 'Grenade', price: '15', imgUrl: '../assets/fruit/grenade.jpg'},
      { id: 7, name: 'Jacque', price: '19', imgUrl: '../assets/fruit/jacque.jpg'},
      { id: 8, name: 'pomme', price: '8', imgUrl: '../assets/fruit/pomme.jpg'},
      { id: 9, name: 'Citron', price: '10', imgUrl: '../assets/fruit/citron.jpg'},
      { id: 10, name: 'Cajou', price: '25', imgUrl: '../assets/fruit/acajou.jpg'}

    ]
  },
  {
    category: 'legumes',

    products: [
      { id: 30, name: 'Tomate', price: '6', imgUrl: '../assets/legume/tomate.jpg'},
      { id: 31, name: 'Carrotte', price: '8', imgUrl: '../assets/legume/carotte.jpg'},
      { id: 32, name: 'Celeri', price: '12', imgUrl: '../assets/legume/celeri.jpg'},
      { id: 33, name: 'Choux', price: '8', imgUrl: '../assets/legume/choux.jpg'},
      { id: 34, name: 'Courge', price: '8', imgUrl: '../assets/legume/courge.jpg'},
      { id: 35, name: 'Courgette', price: '11', imgUrl: '../assets/legume/courgette.jpg'},
      { id: 36, name: 'Haricot Blanc', price: '6', imgUrl: '../assets/legume/haricotBlanc.jpg'},
      { id: 37, name: 'Haricot Vert', price: '10', imgUrl: '../assets/legume/haricotVert.jpg'},
      { id: 38, name: 'Oignon', price: '13', imgUrl: '../assets/legume/oignon.jpg'},
      { id: 39, name: 'Poivron', price: '14', imgUrl: '../assets/legume/poivron.jpg'},
      { id: 40, name: 'Pomme de terre', price: '5', imgUrl: '../assets/legume/pommeDeTerre.jpg'}
    ]
  },
  {
    category: 'vetement',
    expanded: true,
    products: [
      { id: 50, name: 'Tshort', price: '150', imgUrl: '../assets/img/Img/tshort.jpg'},
      { id: 51, name: 'culotte', price: '120', imgUrl: '../assets/img/Img/culotte.jpg'},
      { id: 52, name: 'chemise', price: '170', imgUrl: '../assets/img/Img/chemise.jpg'},
      { id: 53, name: 'jean', price: '180', imgUrl: '../assets/img/Img/jean.jpg'}
    ]
  },


];
  private cart = [];
  constructor() { }
  getProducts() {
  return this.data;
  }

   getCart() {
     return this.cart;
   }
   addProduct(product) {
     this.cart.push(product);
   }
  }

