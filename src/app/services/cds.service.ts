import { Injectable } from '@angular/core';
import { CD } from '../../models/cd';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getAllCds(): CD[]{
    return[
      {
        id: 1,
        title: 'The Dark Side of the Moon',
        author: 'Pink Floyd',
        price: 15.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png',
        dateDeSortie: new Date('1973-03-01'),
        quantite: 10,
        onsale: true
      },
      {
        id: 2,
        title: 'The Wall',
        author: 'Pink Floyd',
        price: 19.99,
        thumbnail: 'https://m.media-amazon.com/images/I/51WrG48A3tL.jpg',
        dateDeSortie: new Date('1979-11-30'),
        quantite: 5,
        onsale: false
      },
      {
        id: 3,
        title: 'Wish You Were Here',
        author: 'Pink Floyd',
        price: 17.99,
        thumbnail: 'https://m.media-amazon.com/images/I/71m0ofUWYXL._SL1300_.jpg',
        dateDeSortie: new Date('1975-09-12'),
        quantite: 10,
        onsale: true
      },
      {
        id: 4,
        title: 'Animals',
        author: 'Pink Floyd',
        price: 14.99,
        thumbnail: 'https://m.media-amazon.com/images/I/71rSLsD3iML._SX355_.jpg',
        dateDeSortie: new Date('1977-01-23'),
        quantite: 200,
        onsale: true
      }
    ];
  }

  getCdByID(id: number): CD{
    const cd = this.getAllCds().find(cd=> cd.id === id);
    if(cd){
      return cd;
    }
    throw new Error('CD introuvable');
  }
}
