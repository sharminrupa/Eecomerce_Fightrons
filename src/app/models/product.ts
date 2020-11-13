export class Product {
    id: number;
    name: string;
    descripation: string;
    price: number;
    imgUrl: string;

   constructor(id, name, descripation = '', price = 0, imgUrl = '../assets/images/1.jpg') {
    this.id = id
    this.name = name
    this.descripation = descripation
    this.price = price
    this.imgUrl = imgUrl

   } 
}
