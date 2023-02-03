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
    //   if (this.formRegisterUser.valid) {
    //     Swal.fire({
    //       position: 'center',
    //       icon: 'success',
    //       title: `Se ha regitrado correctamente al producto`,
    //       showConfirmButton: false,
    //       timer: 1000
    //     })
    //     this.userGuarServ.isRegisterUser(this.formRegisterUser.value.correo, this.formRegisterUser.value.contraseña)
    //     this.userService.addUser(this.formRegisterUser.value)
    //     console.log(this.formRegisterUser.value)
    //     this.route.navigate(['login'])

    //   } else {
    //     Swal.fire({
    //       icon: 'warning',
    //       title: '',
    //       text: 'Los campos no deben estar vacios!'
    //     })
    //   }
    console.log("datos ->", this.formRegisterUser.value);
    const res = await this.userGuarServ.isRegisterUser(this.formRegisterUser.value)
      .catch(error => {
        console.log("Error Registro");
      })

    if (res) {
      console.log("Exito a Registrar usuario");
      const path = 'users'
      const id = String(res.user?.uid)
      console.log("UID ->", res.user?.uid);
      this.formRegisterUser.value.contraseña = null
      await this.userService.addUSer(this.formRegisterUser.value, path, id)
        .catch(err => {
          console.log("error");
        })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Se ha regitrado correctamente al producto`,
        showConfirmButton: false,
        timer: 1000
      })
      this.route.navigate(['/login'])
    }
  }

}
