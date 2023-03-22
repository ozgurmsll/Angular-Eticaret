import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './authentication/admin-guard';
import { AuthComponent } from './authentication/auth/auth.component';
import { CategoryCreateComponent } from './categories/category-create/category-create.component';
import { HomeComponent } from './shared/home/home.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,},
  { path: '', redirectTo:'/home',pathMatch:'full' },
  { path: 'products/create', component: ProductCreateComponent,canActivate:[AdminGuard] },
  { path: 'categories/create', component: CategoryCreateComponent,canActivate:[AdminGuard] },
  { path: 'products', component: ProductListComponent },
  { path: 'products', loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule) },
  { path: 'products/:productId', component: ProductComponent },
  { path: 'products/category/:categoryId', component: ProductListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'loading', component: AuthComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

