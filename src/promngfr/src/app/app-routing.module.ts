import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateListComponent } from './update-list/update-list.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'updates', component: UpdateListComponent },
  { path: 'products', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
