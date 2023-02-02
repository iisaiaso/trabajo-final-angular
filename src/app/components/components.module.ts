import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MostrarProdutComponent } from './mostrar-produt/mostrar-produt.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MostrarProdutComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    MostrarProdutComponent,
    InicioComponent
  ]
})
export class ComponentsModule { }
