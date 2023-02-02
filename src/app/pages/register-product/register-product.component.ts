import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {
  formRegisterProduct!: FormGroup
  constructor(private productService: ProductService, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.formRegisterProduct = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      costo: ['', [Validators.required]],
      oferta: ['', [Validators.required]],
      imagen: ['', [Validators.required]]

    })
  }
  async saveProducts({ nombre, descripcion, costo, oferta, imagen }: any) { 
    const user =  {
      nombre: nombre,
      descripcion: descripcion,
      costo: costo,
      oferta: oferta,
      imagen: imagen
    }
    console.log(user);
    if (this.formRegisterProduct.valid) {
      // this.productService.addProduct(this.formRegisterProduct.value)
      this.productService.addProduct(user)
        .then(res => {
          if (res) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `Se ha regitrado correctamente al producto`,
              showConfirmButton: false,
              timer: 1000
            })
            this.route.navigate(['/product-admin'])
          }
        })
        .catch(error => { console.log(error) })

    } else {
      Swal.fire({
        icon: 'warning',
        title: '',
        text: 'Los campos no deben estar vacios!'
      })
    }
  }
}
