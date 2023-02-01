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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'pedido', component: PedidosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'register-product', component: RegisterProductComponent },
  { path: 'product-admin', component: ProductAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
