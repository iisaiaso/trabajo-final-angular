import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/interface/productos';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-inicio-component',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  productos!: Productos[]
  array !: any
  arrayps: any[] = []
  constructor(private produtoService: ProductService) { }

  ngOnInit(): void {
    this.produtoService.getAllProduct().subscribe(res => {
      this.productos = res
      for (let i = 0; i < 4; i++) {
        this.array = this.productos[Math.floor(Math.random() * this.productos.length)]
        this.arrayps.push(this.array)
      }
    })
  }
}
