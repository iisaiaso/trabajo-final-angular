import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserGuardService } from 'src/app/services/user-guard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup

  constructor(private authServiceLogin: UserGuardService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  async sendLogin() {
    //Para ingresar al por el login
    // console.log("Credenciales -> ", this.formLogin.value);
    if (this.formLogin.valid) {
      const res = this.authServiceLogin.isLogin(this.formLogin.value)
        .catch(error => {
          console.log("error");
          Swal.fire({
            icon: 'warning',
            title: '',
            text: 'Correo y contraseña incorrectas'
          })
        })

      if (await res ) {
        // console.log("res ->", res);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Bienvenido ${this.formLogin.value.email}`,
          showConfirmButton: false,
          timer: 1500
        })
        this.route.navigate(['/'])
      }
    }else{
      Swal.fire({
        icon: 'warning',
        title: '',
        text: 'Los campos estan vacios'
      })
    }


  }

}
