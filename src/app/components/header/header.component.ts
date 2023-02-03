import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserGuardService } from 'src/app/services/user-guard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 login:boolean = false
  constructor(private authServiceLogout: UserGuardService, private route: Router) { 
    this.authServiceLogout.stateUSer().subscribe(res =>{
        if(res){
          console.log('esta logeado');
          this.login=true
            
        }else{
          console.log('No esta logeado');
          Swal.fire({
            icon:'info',
            text: 'No esta logeado!',
            showConfirmButton: false,
            timer: 1500
          })
          this.login=false
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
}
