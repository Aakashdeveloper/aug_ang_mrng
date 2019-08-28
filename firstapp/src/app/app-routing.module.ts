import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './products/product.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { RouterGaurd } from './products/router.gaurds';

const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: 'product/:id', canActivate: [RouterGaurd], component: ProductDetailComponent},
  {path: 'orders', component: OrderComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [RouterGaurd],
  exports: [RouterModule]
})
export class AppRoutingModule { }
