import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoComponent } from './producto/producto.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    ProductoComponent,
    HomeComponent,
    PedidosComponent,
    DetalleComponent,
    LoginComponent,
    RegisterUserComponent,
    RegisterProductComponent,
    ProductAdminComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    InicioComponent,
    ProductoComponent,
    HomeComponent,
    PedidosComponent,
    DetalleComponent,
    LoginComponent,
    RegisterUserComponent,
    RegisterProductComponent,
    ProductAdminComponent
  ]
})
export class PagesModule { }
