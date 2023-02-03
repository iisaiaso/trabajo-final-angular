import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserGuardService } from 'src/app/services/user-guard.service';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  login: boolean = false
  rol: string ='3'
  nombre!: string
  constructor(private authServiceLogout: UserGuardService, private route: Router, private userServ: UserService) {
    this.authServiceLogout.stateUSer().subscribe(res => {
      if (res) {
        console.log('esta logeado');
        this.login = true
        this.getUSerData(res.uid)
      } else {
        console.log('No esta logeado');
        Swal.fire({
          icon: 'info',
          text: 'No esta logeado!',
          showConfirmButton: false,
          timer: 1500
        })
        this.login = false
      }
    })
  }

  logoutUser() {
    Swal.fire({
      title: 'Desea cerrar sesion',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log Out!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Exitoso!',
          'Has cerrado sesion correctamente',
          'success'
        )
        this.authServiceLogout.isLogOut()
        this.route.navigate(['/'])
      }
    })

  }
  //para mostrar segun los roles los datos de quien se logea
  getUSerData(uid: string) {
    const path = 'users'
    const id = uid
    this.userServ.getUser(id, path).subscribe(res => {
      console.log('info ->', res)
      if (res) {
        for (let u of res) {
          this.rol = u.rol
          this.nombre = u.nombre
        }
      }
    })
  }

}
