import { Component } from '@angular/core';
import { Productos } from 'src/app/interface/productos';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent {
  productos!: Productos[]
  constructor(private produtoService: ProductService) { }

  ngOnInit(): void {
    this.produtoService.getAllProduct().subscribe(res => {
      this.productos = res
    })
  }

  onDeleteProduct(producto: Productos) {

    Swal.fire({
      title: 'Desea eliminar producto',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Exitoso!',
          'Has Eliminado producto exitosamente',
          'success'
        )
        this.produtoService.deleteProduct(producto)
      }
    })

  }
}
