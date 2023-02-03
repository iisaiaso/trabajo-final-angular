import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserGuardService } from 'src/app/services/user-guard.service';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/interface/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  login: boolean = false
  rol: string ='3'
  nombre!: string
  array!:Users[]
  constructor(private authServiceLogout: UserGuardService, private route: Router, private userServ: UserService) {
    this.authServiceLogout.stateUSer().subscribe(res => {
      if (res) {
        console.log('esta logeado');
        console.log('UID->', res.uid);
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
    this.userServ.getUser(path).subscribe(res => {
      console.log('info ->', res)
      this.array = res
      console.log("array ->",this.array);
      
      if (this.array) {
        console.log(this.array);
        
        for (let u of this.array) {
          // console.log("id ->", u.id); 
          // console.log("rol ->", u.rol); 
          // console.log("rol ->", u.nombre); 
         if(u.id == id){
          
             this.rol = u.rol
             this.nombre = u.nombre
             console.log("name ->", this.nombre);
            //  console.log("id ->", u.id); 
             console.log("rol ->", u.rol); 
             
         }
        }
      }
    })
  }

}
