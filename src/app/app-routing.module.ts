import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  { path: '', component: ProductsTableComponent },
  { path: 'contacts', component: ContactFormComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'products/:id', component: ProductDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
