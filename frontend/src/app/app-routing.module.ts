import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Principal'
  },
  {
    path: 'product/new',
    component: NewProductComponent,
    title: 'Novo Produto'
  },
  {
    path: 'product/edit/:id',
    component: EditProductComponent,
    title: 'Editar Produto'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
