import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { RegisterProductComponent } from './pages/register-product/register-product.component';
import { ProductAdminComponent } from './pages/product-admin/product-admin.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

const routes: Routes = [
  
  { path: '', component: InicioComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'pedido', component: PedidosComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'login', component: LoginComponent, ...canActivate(() => redirectLoggedInTo(['/']))},
  { path: 'producto', component: ProductoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},

  { path: 'home', component: HomeComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'register-product', component: RegisterProductComponent },
  { path: 'product-admin', component: ProductAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
