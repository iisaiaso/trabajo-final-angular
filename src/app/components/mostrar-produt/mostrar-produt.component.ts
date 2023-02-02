import { Productos } from './../../interface/productos';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-produt',
  templateUrl: './mostrar-produt.component.html',
  styleUrls: ['./mostrar-produt.component.css']
})
export class MostrarProdutComponent implements OnInit{
  productos!: Productos[]
  constructor( private produtoService : ProductService, private router:Router){}

  ngOnInit(): void {
      this.produtoService.getAllProduct().subscribe(res =>{
        this.productos  = res
      })
  }

  mostrarDetalle(id:string | undefined){
    this.router.navigate(['detalle/', id])
  }
}
