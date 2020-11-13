import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'This is a product 1 descripation. The product is realy cool', 10000),
    new Product(2, 'Product 2', 'This is a product 2 descripation. The product is realy cool', 20000),
    new Product(3, 'Product 3', 'This is a product 3 descripation. The product is realy cool', 30000),
    new Product(4, 'Product 4', 'This is a product 4 descripation. The product is realy cool', 40000),
    new Product(5, 'Product 5', 'This is a product 5 descripation. The product is realy cool', 50000),
    new Product(6, 'Product 6', 'This is a product 6 descripation. The product is realy cool', 60000),
    new Product(7, 'Product 7', 'This is a product 7 descripation. The product is realy cool', 70000),
    new Product(8, 'Product 8', 'This is a product 8 descripation. The product is realy cool', 80000)
  ]

  constructor() { }

  getProducts(): Product[]{
    //TODO: Populate products from an API and return an Obserable
    return this.products

  }
}
