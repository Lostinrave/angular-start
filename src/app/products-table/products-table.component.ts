import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface ProductsTable {
  id: number;
  photo: string;
  name: string;
  price: number;
  description: string;
}

const ELEMENT_DATA: ProductsTable[] = [
{id: 1, photo: 'https://images.kaina24.lt/43/63/iphone-13-128gb.jpg', name: 'Iphone 13', price: 799, description: 'A large phone with one of the best screens'},
{id: 2, photo: 'https://images.kaina24.lt/43/14/samsung-galaxy-s21-128gb-2.jpg', name: 'Samsung s21', price: 699, description: 'A great phone with one of the best cameras'},
{id: 3, photo: 'https://images.kaina24.lt/43/93/oneplus-9-pro-2.jpg', name: 'One plus 9', price: 599, description: 'A great phone with one of the best cameras'},
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
  displayedColumns: string[] = ['id','photo', 'name', 'price', 'description'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

