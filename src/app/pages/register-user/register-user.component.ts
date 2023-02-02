import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserGuardService } from 'src/app/services/user-guard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  formRegisterUser!: FormGroup
  constructor(private userService: UserService, private userGuarServ: UserGuardService, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.formRegisterUser = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      nombreUsuario: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      rol: ['', [Validators.required]]

    })
  }

  async saveUSer() {
    console.log(this.formRegisterUser.value)
    console.log(this.formRegisterUser.value.correo, this.formRegisterUser.value.contraseña)
    if (this.formRegisterUser.valid) {
      this.userService.addProduct(this.formRegisterUser.value)
      this.userGuarServ.isRegisterUser(this.formRegisterUser.value.correo, this.formRegisterUser.value.contraseña)
        .then(res => {
          if (res) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `Se ha regitrado correctamente al producto`,
              showConfirmButton: false,
              timer: 1000
            })
            this.route.navigate(['/login'])
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
