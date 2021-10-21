import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { ELEMENT_DATA } from '../products';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-products',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],

})
export class ProductsTableComponent {
  displayedColumns: string[] = ['id','photo', 'name', 'price', 'description', 'view'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

