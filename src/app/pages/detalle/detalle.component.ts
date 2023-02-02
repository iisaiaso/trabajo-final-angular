import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/interface/productos';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  productos!: Productos[]
  id!: string
  pedido!: any

  resultado = 1
  constructor(private produtoService: ProductService, private route: ActivatedRoute, private pedidoServ: CarritoService, private router: Router) { }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'))
    this.produtoService.getAllProduct().subscribe(res => {
      this.productos = res
    })


  }

  savePedido({ nombre, costo, cantidad }: any) {

    this.pedido = {
      nombre: nombre,
      costo: costo,
      cantidad: cantidad
    }

    this.router.navigate(['/pedido'])

    this.pedidoServ.addPedido(this.pedido)
      .then(res => {
        if (res) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Se ha regitrado correctamente al producto`,
            showConfirmButton: true,
            timer: 1000
          })
          this.router.navigate(['/pedido'])
        }
      })
      .catch(error => { console.log(error) })
  }


  //Para seleccionar la catidad del producto
  incrementar() {
    this.resultado += 1
  }
  decremento() {
    if (this.resultado == 1) alert("Cantidad no valida")
    else this.resultado -= 1
  }
}
