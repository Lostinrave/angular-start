import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ELEMENT_DATA } from '../products';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // Klases objekto parametrai
  productId = 0;
  product : any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }
  // Kaip pasiekti produkto :id parametra is url?
  // Si funkcija suveikia visada, kai uzkraunamas komponentas
  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    console.log(this.productId);

    // Priskiriame produkto objektui, duomenis is duomenu masyvo pagal produkto/elemento ID
    this.product = ELEMENT_DATA[this.productId - 1];
    console.log(this.product);
  }

}
