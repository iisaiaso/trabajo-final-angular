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

  sendLogin() {
    if (this.formLogin.valid) {
      this.authServiceLogin.isLogin(this.formLogin.value)
        .then(res => {
          if (res) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `Bienvenido ${this.formLogin.value.email}`,
              showConfirmButton: false,
              timer: 1500
            })
            console.log(this.authServiceLogin.isLogin(this.formLogin.value));
            
            this.route.navigate(['/home'])
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
