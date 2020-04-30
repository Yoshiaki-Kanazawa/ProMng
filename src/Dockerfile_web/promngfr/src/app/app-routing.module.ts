import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'updates', component: UpdateListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'detail/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
