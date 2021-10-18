import {Component} from '@angular/core';


export interface ProductsTable {
    id: number;
    name: string;
    price: number;
    description: string;
    photo: string;
}

const ELEMENT_DATA: ProductsTable[] = [
  {id: 1, name: 'Iphone 13', price: 799, description: 'A large phone with one of the best screens', photo: 'https://images.kaina24.lt/43/63/iphone-13-128gb.jpg'},
  {id: 2, name: 'Samsung s21', price: 699, description: 'A great phone with one of the best cameras', photo: 'https://images.kaina24.lt/43/14/samsung-galaxy-s21-128gb-2.jpg'},
  {id: 3, name: 'One plus 9', price: 599, description: 'A great phone with one of the best cameras', photo: 'https://images.kaina24.lt/43/93/oneplus-9-pro-2.jpg'},
//   {id: 4, name: 'Beryllium', price: 9.0122, description: 'Be', photo:},
//   {id: 5, name: 'Boron', price: 10.811, description: 'B', photo:},
//   {id: 6, name: 'Carbon', price: 12.0107, description: 'C', photo:},
//   {id: 7, name: 'Nitrogen', price: 14.0067, description: 'N', photo:},
//   {id: 8, name: 'Oxygen', price: 15.9994, description: 'O', photo:},
//   {id: 9, name: 'Fluorine', price: 18.9984, description: 'F', photo:},
//   {id: 10, name: 'Neon', price: 20.1797, description: 'Ne', photo:},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-products',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],

})
export class ProductsTableComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'description','photo'];
  dataSource = ELEMENT_DATA;
}
