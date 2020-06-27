import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'test', component: ProductListComponent },
  { path: 'updates', component: UpdateListComponent },
  { path: 'test', redirectTo: '/product', pathMatch: 'full' },
  { path: '', component: TableComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
