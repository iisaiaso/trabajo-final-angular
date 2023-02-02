import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/interface/carrito';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedido!: Carrito[]
  suma = 0
  constructor(private pedidoService: CarritoService, private router: Router) { }

  ngOnInit(): void {
    this.pedidoService.getAllPedido().subscribe(res => {
      this.pedido = res
      for(let x of this.pedido){
        const res = x.cantidad * x.costo
        this.suma += res
        console.log(res); 
      }
      console.log(this.suma);
    })
  }
}
